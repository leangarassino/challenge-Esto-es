import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Projects } from 'src/app/components/interfaces/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  name = { name: 'Add Project'}
  form: FormGroup;
  status: any[] = ['enabled', 'disabled']
  date = new Date();
  selected: Projects[] = [];

  constructor(private fb: FormBuilder, private _projectService: ProjectsService, private router: Router, private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      projectInfo: ['', Validators.required],
      projectManager: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      date: [`${this.date.toLocaleString()}`]
    })
   }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(){
    this.selected = this._projectService.getProjects();
  }

  addProject(){
    
    const project: Projects = {
      projectInfo: this.form.value.projectInfo,
      projectManager: this.form.value.projectManager,
      assignedTo: this.form.value.assignedTo,
      status: this.form.value.status,
      description: this.form.value.description,
      date: this.form.value.date   
    }

    this._projectService.addProjects(project)
    this.router.navigate(['/'])
    this._snackBar.open('El proyecto ha sido creado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
