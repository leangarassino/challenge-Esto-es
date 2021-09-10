import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from '../interfaces/projects';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  listProjects: Projects[] = [];


  displayedColumns: string[] = ['Project Info', 'Project Manager', 'Assigned to', 'Status', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _projectService: ProjectsService, private _snackBar: MatSnackBar, private router: Router) { }

  
  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(){
    this.listProjects = this._projectService.getProjects();
    this.dataSource = new MatTableDataSource(this.listProjects)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteProjects(index: number) {
    // console.log(index)
    this._projectService.deleteProjects(index);
    this.loadProjects();
    this._snackBar.open('El proyecto ha sido eliminado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  editProject(index: number){
    this.router.navigate(['editproject', index])
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}}
