module.exports = {

  getMenus(){

    return [
      {
        text: "Tela Inicial",
        href: "/admin",
        icone: "home",
        active: false
      },
      {
        text: "Menu",
        href: "/admin/menus",
        icone: "cutlery",
        active: false
      },
      {
        text: "Reservas",
        href: "/admin/reservations",
        icone: "calendar-check-o",
        active: false
      },
      {
        text: "Contatos",
        href: "/admin/contacts",
        icone: "comments",
        active: false
      },
      {
        text: "Usuários",
        href: "/admin/users",
        icone: "users",
        active: false
      },
      {
        text: "Emails",
        href: "/admin/emails",
        icone: "envelope",
        active: false
      }
    ]
  }
}