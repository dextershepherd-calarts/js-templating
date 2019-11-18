var projects = {
  github: {
    title: "Github",
    subtitle: "my cool coding stuff",
    desc: "some other thing",
    linkText: "view my project",
    linkHref: "https://google.com",
    images: [
      {
        src: "assets/github.jpeg"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573976281147-9249c5dd5d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        caption: "something"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573998430178-b05c2ddecbb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573976281147-9249c5dd5d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
      }, 
    ]
  },
  bandcamp: {
    title: "Bandcamp",
    subtitle: "My jamps",
    desc: "sick synths",
    linkText: "view my project",
    linkHref: "https://google.com",
    images: [
      {
        src: "assets/github.jpeg"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573976281147-9249c5dd5d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        caption: "something"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573998430178-b05c2ddecbb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      }, 
      {
        src: "https://images.unsplash.com/photo-1573976281147-9249c5dd5d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
      }, 
    ]
  }
}




$(document).ready(function() {

  var key = window.location.href.split("#")[1]

  var project = projects[key]

  var titleTemplate = $("#project-title-template").html()
  var imageTemplate = $("#project-image-template").html()
  var footerTemplate = $("#project-footer-template").html()

  var title = Handlebars.compile(titleTemplate)
  var image = Handlebars.compile(imageTemplate)
  var footer = Handlebars.compile(footerTemplate)


  var titleHtml = title(project)
  var footerHtml = footer(project)

  project.images.forEach(function(imageContext) {
    var imageHtml = image(imageContext)
    $(".project-images").append(imageHtml)
  })


  $(".project-title").append(titleHtml)
  $(".project-footer").append(footerHtml)

})
