import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {

  }

  customer: any;

  ngOnInit() {

    //pegar o id que virá da url
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      //OBS: converter string pra número: colocar o sinal de + à frente dele.
      this.customer = this.customerService.getById(+id);

    }
  }

}
