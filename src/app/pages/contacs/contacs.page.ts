import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe} from '@angular/common';

//6) Não permite apenas espaço no campo
export function removeSpaces(control: AbstractControl){
  if ( control && control.value && !control.value.replace( /\s/g, '').length){
    control.setValue('');

    }
    return null;

}

@Component({
  selector: 'app-contacs',
  templateUrl: './contacs.page.html',
  styleUrls: ['./contacs.page.scss'],
})
export class ContacsPage implements OnInit {

  // 3) Atributos

  public contactform: FormGroup;
  public pipe = new DatePipe('en_US'); // Formatar as datas

  constructor(
    // 2) Injeta depend~encias
    public form: FormBuilder,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
    // 4) Cria o formulário de contatos
    this.contactFormCreate();
  }


   // 5) Cria o formulário de contatos
   contactFormCreate() {
    this.contactform = this.form.group({
      date: [''], // Data de envio
      name: [
        // Nome
        '',
        Validators.compose([
          Validators.required, // Obrigatório
          Validators.minLength(3), // Nomes curtos demais
          removeSpaces
        ]),
      ],
      email: [
        // E-mail
        '',
        Validators.compose([Validators.required, Validators.email, removeSpaces]),
      ],
      subject: [
        // Assunto
        '',
        Validators.compose([Validators.required, Validators.minLength(5), removeSpaces]),
      ],
      message: [
        // Mensagem
        '',
        Validators.compose([Validators.required, Validators.minLength(5), removeSpaces]),
      ],
    });
  }
}
