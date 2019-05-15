import { Component, OnInit, ElementRef } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-backend",
  templateUrl: "./backend.component.html",
  styleUrls: ["./backend.component.scss"]
})
export class BackendComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    $(this.elementRef.nativeElement)
      .find("#sidebarToggle, #sidebarToggleTop")
      .on("click", o => {
        //do something here
        $("body").toggleClass("sidebar-toggled"),
          $(".sidebar").toggleClass("toggled"),
          $(".sidebar").hasClass("toggled") &&
            $(".sidebar .collapse").collapse("hide");
      }),
      $(window).resize(function() {
        $(window).width() < 768 && $(".sidebar .collapse").collapse("hide");
      }),
      $("body.fixed-nav .sidebar").on(
        "mousewheel DOMMouseScroll wheel",
        function(o) {
          if (768 < $(window).width()) {
            var e = o.originalEvent,
              l = e.wheelDelta || -e.detail;
            (this.scrollTop += 30 * (l < 0 ? 1 : -1)), o.preventDefault();
          }
        }
      ),
      $(document).on("scroll", function() {
        100 < $(this).scrollTop()
          ? $(".scroll-to-top").fadeIn()
          : $(".scroll-to-top").fadeOut();
      }),
      $(document).on("click", "a.scroll-to-top", function(o) {
        var e = $(this);
        $("html, body")
          .stop()
          .animate(
            { scrollTop: $(e.attr("href")).offset().top },
            1e3,
            "easeInOutExpo"
          ),
          o.preventDefault();
      });
  }
}
