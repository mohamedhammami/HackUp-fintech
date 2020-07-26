import { Injectable } from "@angular/core";
import { AuthService } from "app/services/auth.service";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMSADMIN: Menu[] = [
  {
    state: "home",
    name: "HOME",
    type: "link",
    icon: "explore"
  },
  {
    state: "admin",
    name: "Espace Credit",
    type: "sub",
    icon: "explore",
    children: [{ state: "consultdemande", name: "Consulter Demande Credit" }]
  },

  {
    state: "users",
    name: "USERS",
    type: "sub",
    icon: "person",
    children: [{ state: "list", name: "LISTUSER" }]
  },
  {
    state: "assurance",
    name: "Assurance",
    type: "sub",
    icon: "person",
    children: [{ state: "list", name: "List Assurance" }]
  },

  {
    state: "electorals",
    name: "Product",
    type: "sub",
    icon: "dehaze",
    children: [
      { state: "create", name: "Add new product" },
      { state: "list", name: "Consult Product" }
    ]
  },
 
  {
    state: "admin",
    name: "Comptes",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "", name: "Comptes Titres" },
      { state: "consultcompte", name: "Comptes Bancaire" }
    ]
  }
];

const MENUITEMS: Menu[] = [
  {
    state: "home",
    name: "HOME",
    type: "link",
    icon: "explore"
  },
  
  /*{
    state: "electorals",
    name: "Electoral",
    type: "sub",
    icon: "dehaze",
    children: [{ state: "list", name: "List" }]
  },*/
  {
    state: "account", //  State rahi tab3a route 
    name: "Account",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "addaccount", name: "Ajouter Compte" },
      { state: "addaccount", name: "إضافة حساب" },

      { state: "listacount", name: " Mes Comptes" },
      { state: "listacount", name: " حساباتي" },
    ]
  },

  {
    state: "credit", //  State rahi tab3a route 
    name: "Espace Credit",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "demandercredit", name: " Demander un credit" },
      { state: "demandercredit", name: " طلب للحصول على قرض" },

      { state: "list", name: " List Demande" },
      { state: "simul", name: " Simulateur credit" },


      
    ]
  },

  {
    state: "account",
    name: "Virement",
    type: "sub",
    icon: "dehaze",
    children: [{ state: "virement", name: "Virement rapide" }]
  },
  
  {
    state: "account",
    name: "Contact",
    type: "sub",
    icon: "dehaze",
    children: [{ state: "createcontact", name: "Contacter " }]
  },
  {
    state: "products",
    name: "Product",
    type: "sub",
    icon: "dehaze",
    children: [{ state: "get/1", name: "Inscrire produit " }]
  },
  {
    state: "credit",
    name: "Simulateur ",
    type: "sub",
    icon: "person",
    children: [      { state: "simul", name: " Simulateur credit" },
  ]
  },
  
  /*{
    state: "candidates",
    name: "Candidates",
    type: "sub",
    icon: "supervised_user_circle",
    children: [{ state: "list", name: "List" }]
  },
  
  {
    state: "activities",
    name: "Activity",
    type: "sub",
    icon: "web",
    children: [{ state: "list", name: "List" }]
  }*/
];

@Injectable()
export class MenuItems {
  constructor(private authService: AuthService) {}

  getAll(): Menu[] {
    if (this.authService.isRole("Admin")) {
      return MENUITEMSADMIN;
    } else {
      return MENUITEMS;
    }
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
