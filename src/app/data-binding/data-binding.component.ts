import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  message = 'Meu primeiro Data Binding!';

  imagePath = 'assets/080g.jpg';

  isDisabled = false;

  ariaLabel = 'Fechar';

  estilizarTitulo = false;

  //  botaoClass = 'botao vermelho';
  // OU

  //botaoClass = ['botao', 'verde'];
  // OU

  botaoClass = { botao: true, verde: true };

  // botaoFechar = `
  // border: 1px solid;
  // border-radius: 45px;
  // padding: 5px;
  // width: 30px;
  // height: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;  
  // `;

  // OU

  botaoFechar = {
    border: '1px solid',
    'border-radius': '45px',
    padding: '5px',
    width: '30px',
    height: '30px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }

  imageWidth = 400;

  nomeCliente = '';

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;

    this.imageWidth -= 10;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo;

    this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde
    }

    this.imageWidth += 10;

  }
}
