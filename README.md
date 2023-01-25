# modal-alert
Vanilla JS modal alert

## Use:

### add the css file to your page**

Optionally, add this custom properties to your page (see the `src/modal-alert.scss` file for default values):

* `--malert-success-color`: success color
* `--malert-success-color-fg`: success color foreground
* `--malert-info-color`: info color
* `--malert-info-color-fg`: info color foreground
* `--malert-warning-color`: warning color
* `--malert-warning-color-fg`: warning color foreground
* `--malert-error-color`: error color
* `--malert-error-color-fg`: error color foreground
* `--malert-confirm-color`: confirm color
* `--malert-confirm-color-fg`: confirm color foreground
* `--malert-marks-stroke-width`: stroke width for svg marks
* `--malert-backdrop`: dialog backdrop color
* `--malert-border-radius`: dialog border radius
* `--malert-box-shadow`: dialog box shadow
* `--malert-heading-font-family`: font family for dialog heading
* `--malert-heading-font-size`: font size for dialog heading
* `--malert-heading-font-weigth`: font weigth for dialog heading
* `--malert-body-font-family`: font family for dialog body text

### add javascript

```javascript
import mAlert from '@massimo-cassandro/modal-alert';

mAlert({
  type              : 'success', // success warning error info confirm

  // optionals
  // -------------------------------------------------------------------------
  title             : 'Some title',        // NB: required for `info`
  mes               : 'Some message',      // message, default null
  ok_btn_text       : 'OK',                // text for OK button (default `OK`)
  cancel_btn_text   : 'Annulla',           // text for cancel button (`confirm` only)

  // callback function
  // default `null`
  // the `result` argument is available only for the confim type
  // `result` is `true` if the user confirms, `false` if they cancel
  callback          : function(result) {}, 

  // ms for autoclose, null for disable
  // default `4000` for success, `null` for the others
  // has not effects on `confirm`
  timer             : 4000,

  // classes to be added to relative element (default `null`)
  heading_class     : 'text-success',
  ok_btn_class      : 'btn-success',
  cancel_btn_class  : 'btn-outline-warning'
});
```

The default settings for each type can be viewed in the `./src/js/defaults.js` file.


The special type `global`, if present, contains settings to be applied to all other types.

### Customizing

See demo
