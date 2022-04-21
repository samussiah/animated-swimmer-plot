#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
animatedSwimmerPlot <- function(
    data,
    settings = NULL,
    width = NULL,
    height = NULL,
    elementId = NULL
) {
    inputs <- list(
        data = data,
        settings = jsonlite::toJSON(
            settings,
            auto_unbox = TRUE,
            null = 'null'
        )
    )

    # create widget
    htmlwidgets::createWidget(
        name = 'animatedSwimmerPlot',
        inputs,
        width = width,
        height = height,
        package = 'animatedSwimmerPlot',
        elementId = elementId
    )
}

#' Shiny bindings for animatedSwimmerPlot
#'
#' Output and render functions for using animatedSwimmerPlot within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'     \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'     string and have \code{'px'} appended.
#' @param expr An expression that generates a animatedSwimmerPlot
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'     is useful if you want to save an expression in a variable.
#'
#' @name animatedSwimmerPlot-shiny
#'
#' @export
animatedSwimmerPlotOutput <- function(outputId, width = '100%', height = '400px'){
    htmlwidgets::shinyWidgetOutput(outputId, 'animatedSwimmerPlot', width, height, package = 'animatedSwimmerPlot')
}

#' @rdname animatedSwimmerPlot-shiny
#' @export
renderAnimatedSwimmerPlot <- function(expr, env = parent.frame(), quoted = FALSE) {
    if (!quoted) { expr <- substitute(expr) } # force quoted
    htmlwidgets::shinyRenderWidget(expr, animatedSwimmerPlotOutput, env, quoted = TRUE)
}
