export const defaults = {

  // settings to be applied to all dialog types
  // can be reassigned on single types
  globals: {
    onOpen: null,
    onClose: null,
    cssFile: null,    // css file to be automatically loaded
    animation: true,
    showMarks: true
  },

  success: {
    title: 'Operazione completata',
    mes: null,
    ok_btn_text: 'OK',
    heading_class: null,
    text_class: null,
    ok_btn_class: 'btn btn-success',
    timer: 4000 // ms
  },
  error: {
    title: 'Si è verificato un errore',
    mes: null,
    ok_btn_text: 'OK',
    heading_class: null,
    text_class: null,
    ok_btn_class: 'btn btn-error',
    timer: null
  },
  warning: {
    title: 'Attenzione!',
    mes: null,
    ok_btn_text: 'OK',
    heading_class: null,
    text_class: null,
    ok_btn_class: 'btn btn-warning',
    timer: null
  },
  info: {
    title: null,
    mes: null,
    ok_btn_text: 'OK',
    heading_class: null,
    text_class: null,
    ok_btn_class: 'btn btn-info',
    timer: null
  },
  confirm: {
    title: 'Confermi?',
    mes: null,
    ok_btn_text: 'OK',
    cancel_btn_text: 'Annulla',
    cancel_focus: true, // false to give focus to the ok button
    heading_class: null,
    text_class: null,
    ok_btn_class: 'btn btn-confirm',
    cancel_btn_class: 'btn btn-outline-confirm',
    callback: null,
    timer: null
  }

};
