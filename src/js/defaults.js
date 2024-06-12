export const defaults = {

  // settings to be applied to all dialog types
  // can be reassigned on single types
  globals: {
    onOpen: null,
    onClose: null,
    cssFile: null,    // css file to be automatically loaded
    animation: true,
    showMarks: true,
    callback: null,
    timer: null,
    mes: null,
    heading_class: null,
    text_class: null,
    cancel_focus: false,

    // extra btn markup, ignored on confirm
    extra_btn: null
  },

  success: {
    title: 'Operazione completata',
    ok_btn_text: 'OK',
    ok_btn_class: 'btn btn-success',
    timer: 4000 // ms
  },
  error: {
    title: 'Si è verificato un errore',
    ok_btn_text: 'OK',
    ok_btn_class: 'btn btn-error'
  },
  warning: {
    title: 'Attenzione!',
    ok_btn_text: 'OK',
    ok_btn_class: 'btn btn-warning'
  },
  info: {
    title: null,
    ok_btn_text: 'OK',
    ok_btn_class: 'btn btn-info'
  },
  confirm: {
    title: 'Confermi?',
    ok_btn_text: 'OK',
    cancel_btn_text: 'Annulla',
    cancel_focus: true, // false to give focus to the ok button
    ok_btn_class: 'btn btn-confirm',
    cancel_btn_class: 'btn btn-outline-confirm'

  }

};
