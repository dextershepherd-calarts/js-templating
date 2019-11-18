$(document).ready(function() {
  var projectTemplate = $("#project-template").html()
  var template = Handlebars.compile(projectTemplate)

  var projects = [
    {
      name: "Bandcamp",
      desc: "Where I sell my trax",
      backgroundImg: "assets/bandcamp.jpeg",
      section: ".music-section",
      projectKey: "bandcamp"
    },
    {
      name: "Github",
      desc: "Check out my elite H4x0r skills",
      backgroundImg: "assets/github.jpeg",
      section: ".programming-section",
      projectKey: "github"
    },
    {
      name: "Learned works of computer graphics",
      desc: "!",
      backgroundImg: "assets/cg.jpeg",
      modifierClass: 'text-white',
      section: ".cg-section",
      projectKey: "cg"
    },
    {
      name: "Dexterjshepherd.com",
      desc: "A cool website I build",
      backgroundImg: "assets/website.jpeg",
      section: ".programming-section",
      projectKey: "website"
    },
  ]

  projects.forEach(function(project) {
    var projectHtml = template(project)
    $(project.section).append(projectHtml)
  })


  
})
