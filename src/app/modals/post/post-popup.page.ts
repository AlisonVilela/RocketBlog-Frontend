import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'


import { IPostCreate, IPostUpdate } from 'app/models'

@Component({
  selector: 'app-post-popup-page',
  templateUrl: './post-popup.page.html'
})
export class PostPopupPage {

  public content: string
  public options: Object = { 
    placeholderText: 'Write a sexy post!',
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript',
    '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
    'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
    'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertTable', '|',
    'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print',
    'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
    heightMin: 220,
    heightMax: 220,
    quickInsert: false, 
    charCounterCount: true
  }

  @Input()
  set data(data){
    this.post = data.post
    this.type = data.type    
  }

  public passwordA: string
  public passwordB: string
  public post: IPostCreate | IPostUpdate = <IPostCreate>{}
  public type: 'create' | 'edit'

  constructor(private activeModal: NgbActiveModal) {

  }

  submit = () => {
    this.activeModal.close(this.post)
  }

  cancel = () => {
    this.activeModal.dismiss()
  }

  updateUrl() {
    this.post.img = ''
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.post.img = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
