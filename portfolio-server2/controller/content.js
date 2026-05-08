import { getWork } from '../../portfolio-server/repository/content';
import * as repository from '../repository/content.js'

export const getHome = (req, res, next) => {
    const home = repository.getHome();
    res.jsonData({"result" : home});
}

export const getAbout = (req, res, next) => {
    const about = repository.getAbout();
    res.jsonData({"result" : about});
}

export const getSkills = (req, res, next) => {
    const skills = repository.getSkills();
    res.jsonData({"result" : skills});
}

export const getWork = (req, res, next) => {
    const work = repository.getWork();
    res.jsonData({"result" : work});
}

export const getTestimonials = (req, res, next) => {
    const testimonials = repository.getTestimonials();
    res.jsonData({"result" : testimonials});
}

export const getProject = (req, res, next) => {
    const project = repository.getProject();
    res.jsonData({"result" : project});
}