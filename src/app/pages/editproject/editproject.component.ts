import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/components/interfaces/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  name = { name: 'Edit Project'}
  form: FormGroup;
  status: any[] = ['enabled', 'disabled']
  listProjects: Projects[] = [];
  public date = new Date();

  constructor(private _projectService: ProjectsService, private activatedroute: ActivatedRoute, private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { 

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
    this.loadProject();
  }

  loadProject(){
    this.listProjects = this._projectService.getProjects();
  }

  editProject() {
    const project: Projects = {
      projectInfo: this.form.value.projectInfo,
      projectManager: this.form.value.projectManager,
      assignedTo: this.form.value.assignedTo,
      status: this.form.value.status,
      description: this.form.value.description    
    }
    let id = this.activatedroute.snapshot.paramMap.get('index')
    this._projectService.updateProjects(id, project)
    this.router.navigate(['/'])
    this._snackBar.open('El proyecto ha sido modificado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
