import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from 'src/config/routes.config';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  addCv(formumaire: NgForm) {
    this.cvService.addCv(formumaire.value).subscribe({
      next: () => {
        this.toaster
          .success(`Le cv de ${formumaire.value.firstname} ${formumaire.value.name}
     a été ajouté avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }
}
