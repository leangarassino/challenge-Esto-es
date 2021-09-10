import { Injectable } from '@angular/core';
import { Projects } from '../components/interfaces/projects';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  date = new Date();

  listProjects: Projects[] = [
    {projectInfo: 'Landing Page', projectManager: 'Walt Cosani', assignedTo: 'Ignacio Truffa', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'E-commerce Shop', projectManager: 'Sabrina López', assignedTo: 'Germán Sanchez', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'CRM Linkroom', projectManager: 'Jorge Zanabria', assignedTo: 'Román ', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'New Strategies', projectManager: 'Waldo Pedro', assignedTo: 'Zoe Rojas', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Search', projectManager: 'Guillermo', assignedTo: 'Ramón Pérez', status: 'disabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Social Media', projectManager: 'Alejandra ', assignedTo: 'Lucas Romero', status: 'disabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Marketing', projectManager: 'Liz ', assignedTo: 'Nadia Basualdo', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Blog Creation', projectManager: 'Leonardo ', assignedTo: 'Damián Miranda', status: 'disabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Google Ads', projectManager: 'Agustina Sosa', assignedTo: 'Carlos Castro', status: 'enabled', description:'', date: `${this.date.toLocaleString()}`},
    {projectInfo: 'Seo', projectManager: 'Delfina ', assignedTo: 'Beatriz ', status: 'enabled', description: '', date: `${this.date.toLocaleString()}`}
  ];

  constructor() { }

  getProjects() {
    return this.listProjects.slice();
  }

  updateProjects(index: any, project: Projects) {
    this.listProjects.splice(index, 1, project )
  }

  deleteProjects(index: number) {
    this.listProjects.splice(index, 1);
  }

  addProjects(project: Projects){
    this.listProjects.unshift(project)
  }
}
