import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  // Cree un groupe de champ
 form = this.fb.group({
   nom: ['', [Validators.required, Validators.maxLength(40)]],
   prénom: ['', [Validators.required, Validators.maxLength(40)]]
   //continuer nos champs
 })
 
  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
  }

}

