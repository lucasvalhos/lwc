import { LightningElement } from 'lwc';

export default class CriarContaFacil extends LightningElement {

    handleSuccess(event) {
        alert('Conta criada com o id: ' + event.detail.id);
    }

}