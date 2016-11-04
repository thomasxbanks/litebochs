;
(function($, window, document, undefined) {
    let pluginName = 'litebochs',
        defaults = {
            path: 'css',
            theme: 'dark',
            anim: 'zoom',
            speed: 'fast',
            yourMum: 'epic'
        }

    function Plugin(element, options) {
        this.element = element

        this.options = $.extend({}, defaults, options)

        this._defaults = defaults
        this._name = pluginName

        this.init()
    }

    Plugin.prototype.init = function() {
        parent = this.element
        console.info(parent)
        // Load the prescriptive styles. @TODO Consider moving this into the javscript to minimise the number of files to load.
        $('head').append("<link rel='stylesheet' href='" + this.options.path + "/litebochs.css'>")
            // Load the FontAwesome CDN for the close icon.
            // @TODO Can this be switched for a standard tiny image or passed through as an option to match branding on individual sites?
        $('body').append("<script src='https://use.fontawesome.com/804ff9ee50.js'></script>")
            // Build the elements that make up the lightbox
        const litebochsControls = "<i aria-label='close lightbox' class='fa fa-fw fa-times'></i>"
        const litebochsContent = "<div data-element='litebochs-content'><div data-element='litebochs-content-inner'></div></div>"
        const litebochs = "<div data-element='litebochs' data-state='closed'>" + litebochsControls + litebochsContent + "</div>"
            // Append the built elements to the page body
        $('body').append(litebochs)

          $('[data-element="litebochs"]')
          .attr('data-theme', this.options.theme)
          .attr('data-anim', this.options.anim)
          .attr('data-speed', this.options.speed)


            // Find every <img> in the parent element
        $(parent).find('img').each(function(i, obj) {
          $(this).css('cursor', 'pointer')
          console.error('img', i)
            // When any individual <img> is clicked on...
            $(this).on('click', function() {
                // Add an <img> to the lightbox content using the data from the original image
                $('[data-element="litebochs-content-inner"]').html('').html('<img src="' + this.currentSrc + '" alt="' + this.alt + '" />')
                    // Apply the correct styles to the image depending on whether it is portrait or landscape
                if (this.clientHeight > this.clientWidth) {
                    $('[data-element="litebochs-content"]').attr('data-content', 'portrait')
                } else {
                    $('[data-element="litebochs-content"]').attr('data-content', 'landscape')
                }
                $(parent).attr('data-state', 'blur')
                    // Finally open the lightbox
                openlitebochs()
            })

        })

        // Allow the lightbox to be closed on clicking the close icon
        $('body').on('click', "[aria-label='close lightbox']", function() {
            $(parent).attr('data-state', '')
                // First close the lightbox
            closelitebochs()
            setTimeout(function() {
                // Then empty the current lightbox
                $('[data-element="litebochs-content-inner"]').html('')
            }, parseInt(parent.options.speed))
        })

        // Allow the lightbox to be closed on pressing the escape key
        $('body').on('keyup', function(e) {
            if (e.which == 27) {
                $(parent).attr('data-state', '')
                    // First close the lightbox
                closelitebochs()
                setTimeout(function() {
                    // Then empty the current lightbox
                    $('[data-element="litebochs-content-inner"]').html('')
                }, parseInt(parent.options.speed))
            }

        })
    }


    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options))
            }
        })
    }


}(jQuery, window, document))

// Function to open the lightbox
function openlitebochs() {
    $('[data-element="litebochs"]').attr('data-state', 'open')
}

// Function to close the lightbox
function closelitebochs() {
    $('[data-element="litebochs"]').attr('data-state', 'closed')
}
