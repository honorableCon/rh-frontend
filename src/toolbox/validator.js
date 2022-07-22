import Joi from "joi";

export const personnelSchema = Joi.object({
    prenom: Joi.string()
        .required()
        .min(2)
        .messages({
            'string.empty': 'Le prénom est requis',
        }),
    nom: Joi.string()
        .required(),
    dateDeNaissance: Joi.string()
        .required(),
    sexe: Joi.string()
        .required(),
    cni: Joi.string()
        .length(19)
        .required(),
    nationalite: Joi.string()
        .required(),
    email: Joi.string()
        .required(),
    telephone: Joi.string()
        .required(),
    nombreConjoint: Joi.number()
        .integer()
        .required(),
    nombreEnfant: Joi.number()
        .integer()
        .required(),
    dateDebut: Joi.string()
        .required(),
    dateFin: Joi.string()
        .required(),
    statutId: Joi.number()
        .integer()
        .required(),
    typeContratId: Joi.number()
        .integer()
        .required(),
    fonctionId: Joi.number()
        .integer()
        .required(),
    filiereId: Joi.number()
        .integer()
        .required(),
    statuts: Joi.string(),
    typeContrats: Joi.string(),
    fonctions: Joi.string(),
    filieres: Joi.string(),
});