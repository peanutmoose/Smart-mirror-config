Last login: Wed Aug  4 02:15:00 on console
huangtiffany@MacBook-Pro ~ % cd desktop
huangtiffany@MacBook-Pro desktop % vi updatedconfig.js





















/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
        var config = {
          address: "localhost",
          electronOptions: {
            webPreferences: {
              webviewTag: true
            }
          },
          port: 8080,
        basePath: "/",  // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                                        // you must set the sub path here. basePath must end with a /
@                                                                               

