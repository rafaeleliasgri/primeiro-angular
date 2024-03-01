import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-biding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent {

  message = 'Meu primeiro Data Biding!';

  imagePath = 'assets/080g.jpg';

  isDisabled = false;

  ariaLabel = 'Fechar';

  nomeCliente = '';

  estilizarTitulo = false;

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo;
  }




}
