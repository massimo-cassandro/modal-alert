import confirm_mark from './svg/confirm.svg';
import info_mark from './svg/info.svg';
import error_mark from './svg/error.svg';
import success_mark from './svg/success.svg';
import warning_mark from './svg/warning.svg';

import {defaults} from './js/defaults';

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement

// TODO check per tutti gli elelenti di extra_btn
// TODO eliminare dist (come incorporare svg?)

export default function (params, custom_defaults = {}) {

  const marks = {
    confirm: confirm_mark,
    info: info_mark,
    error: error_mark,
    success: success_mark,
    warning: warning_mark
  };

  try {

    // garbage collection
    let dialog = document.querySelector('.modal-alert');
    if(dialog) {
      dialog.remove();
    }


    params = {
      ...(defaults.globals?? {}),
      ...(custom_defaults.globals?? {}),
      ...(defaults[params.type]?? {}),
      ...(custom_defaults[params.type]?? {}),
      ...params
    };

    if(!params.type || Object.keys(defaults).filter(item => item !== 'global').indexOf(params.type) === -1) {
      throw 'Missing or incorrect `type` parameter';
    }

    if(params.callback && typeof params.callback !== 'function') {
      throw 'Incorrect `callback` parameter';
    }
    if(params.onOpen && typeof params.onOpen !== 'function') {
      throw 'Incorrect `onOpen` parameter';
    }
    if(params.onClose && typeof params.onClose !== 'function') {
      throw 'Incorrect `onClose` parameter';
    }

    if(params.cssFile && !document.querySelector(`link[href='${params.cssFile}']`)) {
      document.head.insertAdjacentHTML('beforeend',
        `<link rel="stylesheet" href="${params.cssFile}" type="text/css">`
      );
    }


    // if(!params.title) {
    //   throw '`title` parameter not present';
    // }

    document.body.insertAdjacentHTML('beforeend',
      `<dialog class="modal-alert modal-alert-${params.type}${params.animation? ' modal-alert-animated' : ''}">
        <div class="malert-inner">
          ${params.showMarks? `<div class="malert-mark">${marks[params.type]}</div>` : ''}
          <div class="malert-body">
            ${params.title? `<div class="malert-heading ${params.heading_class?? ''}">${params.title}</div>` : ''}
            <div class="malert-text ${params.text_class?? ''}">${params.mes?? ''}</div>
            <div class="malert-btns">
              <button type="button" class="malert-ok ${params.ok_btn_class}">
                ${params.ok_btn_text}
              </button>
              ${params.type === 'confirm'?
                `<button type="button" class="malert-cancel ${params.cancel_btn_class}">
                  ${params.cancel_btn_text}
                </button>`
              : ''}
              ${params.extra_btn?? ''}
            </div>
          </div>
        </div>
      </dialog>`
    );

    dialog = document.querySelector('.modal-alert');

    dialog.showModal();

    // btn focus
    const ok_btn = dialog.querySelector('.malert-ok'),
      cancel_btn = dialog.querySelector('.malert-cancel'),
      extra_btn = (params.extra_btn && params.extra_btn_selector)? dialog.querySelector(params.extra_btn_selector) : null;

    if(extra_btn && params.extra_btn_focus) {
      extra_btn.focus();

    } else if(cancel_btn && params.cancel_focus) { // confirm
      cancel_btn.focus();

    } else {
      ok_btn.focus();
    }

    if(params.onOpen && typeof params.onOpen === 'function') {
      params.onOpen();
    }

    let timeoutID;

    const dialogDismiss = (btn) => {
      dialog.remove();

      if(params.onClose && typeof params.onClose === 'function') {
        params.onClose();
      }

      // Se presente, l'argomento del callback è btn.dataset.confirmResult
      // altrimenti, se il modal è di tipo confirm true se è il pulsante OK, false in caso contrario
      // altrimenti undefined
      if(params.callback && typeof params.callback === 'function') {
        let arg;
        if(btn) {
          if(btn.dataset?.confirmResult) {
            arg = btn.dataset.confirmResult;

          } else if(params.type === 'confirm') {
            arg = btn.classList.contains('malert-ok');
          }
        } else {
          arg = undefined;
        }

        params.callback(arg);
      }

      if(timeoutID) {
        window.clearTimeout(timeoutID);
      }
    };

    if( params.timer && params.type !== 'confirm') {
      timeoutID = window.setTimeout( function() {
        dialogDismiss();
      }, params.timer);
    }

    dialog.addEventListener('close', () => {
      dialogDismiss();
    }, false);

    [ok_btn, cancel_btn, ...(extra_btn? [extra_btn] : [])].forEach(btn => {

      btn?.addEventListener('click', () => {
        dialogDismiss(btn);
      }, false);

    });


  } catch(e) {
    console.error( e ); // eslint-disable-line
  }

}
