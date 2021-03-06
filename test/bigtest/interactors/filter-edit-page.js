import {
  interactor,
  Interactor,
  is,
  isPresent,
  value,
} from '@bigtest/interactor';

@interactor class ButtonInteractor {
  isButton = is('button');
}

@interactor class TypeSelect {
  static defaultScope = 'select[name="type"]';
  value = value();
}

// @interactor class DeleteFilterConfirmation {
//   static defaultScope = '#delete-filter-confirmation';
// }

export default @interactor class EditFilterPage {
  static defaultScope = '[data-test-filter-form-page]';

  typeSelect = new TypeSelect();
  filterName = new Interactor('input[name=label]');
  // deleteFilterConfirmation = new DeleteFilterConfirmation();
  // clickDeleteFilter = clickable('#clickable-delete-filter');
  closePaneBtn = new ButtonInteractor('[icon=times]');
  closeWithoutSaving = new ButtonInteractor('#clickable-cancel-editing-confirmation-cancel');
  addFilterFileBtn = new ButtonInteractor('#add-filter-file-btn');
  saveFilterBtn = new ButtonInteractor('#clickable-savefilter');
  closeEditPaneBtn = new ButtonInteractor('#clickable-closefilterdialog');
  keepEditingBtn = new ButtonInteractor('#clickable-cancel-editing-confirmation-confirm');
  uploadFilterFileBtnIsPresent = isPresent('[data-test-filter-file-upload-button]');
  filterFileCardIsPresent = isPresent('[data-test-filter-file-card]');

  isLoaded = isPresent('[class*=paneTitleLabel---]');
  whenLoaded() {
    return this.when(() => this.isLoaded);
  }
}
