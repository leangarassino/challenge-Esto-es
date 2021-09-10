import { Injectable } from '@angular/core';
import { Projects } from '../components/interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  listProjects: Projects[] = [
    {projectInfo: 'Landing Page', projectManager: 'Walt Cosani', assignedTo: 'Ignacio Truffa', status: 'enabled', description:''},
    {projectInfo: 'E-commerce Shop', projectManager: 'Sabrina López', assignedTo: 'Germán Sanchez', status: 'enabled', description:''},
    {projectInfo: 'CRM Linkroom', projectManager: 'Jorge Zanabria', assignedTo: 'Román ', status: 'enabled', description:''},
    {projectInfo: 'New Strategies', projectManager: 'Waldo Pedro', assignedTo: 'Zoe Rojas', status: 'enabled', description:''},
    {projectInfo: 'Search', projectManager: 'Guillermo', assignedTo: 'Ramón Pérez', status: 'disabled', description:''},
    {projectInfo: 'Social Media', projectManager: 'Alejandra ', assignedTo: 'Lucas Romero', status: 'disabled', description:''},
    {projectInfo: 'Marketing', projectManager: 'Liz ', assignedTo: 'Nadia Basualdo', status: 'enabled', description:''},
    {projectInfo: 'Blog Creation', projectManager: 'Leonardo ', assignedTo: 'Damián Miranda', status: 'disabled', description:''},
    {projectInfo: 'Google Ads', projectManager: 'Agustina Sosa', assignedTo: 'Carlos Castro', status: 'enabled', description:''},
    {projectInfo: 'Seo', projectManager: 'Delfina ', assignedTo: 'Beatriz ', status: 'enabled', description: ''}
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
