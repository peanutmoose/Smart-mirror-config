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
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		
		{
			module: "clock",
			position: "top_left"
		},
		
		{
			module: "compliments",
			position: "bottom_bar"
		},
		
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: ""
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: ""
			}
		},
		{
		  module: "MMM-Detector",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		  }
		},
		{
		  module: "MMM-GoogleAssistant",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		    assistantConfig: {
		  lang: "en-US",
		  latitude: 51.509865, //change
		  longitude: -0.118092, //change
		},
		 responseConfig: {
		  useFullscreen: true,
		  useResponseOutput: true,
		  responseOutputCSS: "response_output.css",
		  screenOutputTimer: 5000,
		  activateDelay: 250,
		  useAudioOutput: true,
		  useChime: true,
		  confirmationChime: true,
		  useInformations: true
		},
		micConfig: {},
		    Extented: {
		      useEXT: true,
			deviceName: "MagicMirror",
			stopCommand: "stop",
		      youtube: {
			useYoutube: true,
			  youtubeCommand: "youtube",
			  displayResponse: true,
			  useVLC: true,
			  minVolume: 30,
			  maxVolume: 100
			},
		      links: {
			 useLinks: true,
			  displayDelay: 60 * 1000,
			  scrollActivate: false,
			  scrollStep: 25,
			  scrollInterval: 1000,
			  scrollStart: 5000
			},
		      photos: {
			usePhotos: true,
			  useGooglePhotosAPI: true,
			  displayType: "none",
			  displayDelay: 10 * 1000,
			  albums: [],
			  sort: "new",
			  hiResolution: true,
			  timeFormat: "DD/MM/YYYY HH:mm",
			  moduleHeight: 300,
			  moduleWidth: 300,
			},
		      welcome: {
			useWelcome: false,
			  welcome: "brief today"
			},
		      cast: {
			useCast: true,
			  port: 8569
			},
		      spotify: {
			useSpotify: true,
			visual: {
				updateInterval: 1000,
				idleInterval: 10000,
				useBottomBar: false,
				CLIENT_ID: "",
				CLIENT_SECRET: "",
			},
			player: {
			type: "Librespot",
			  email: "",
			  password: "",
			  minVolume: 10,
			  maxVolume: 90,
			  usePause: true
			}
		      },
		    },
		    recipes: ["ExtSpotify.js"],
		    NPMCheck: {}
		  }
		},
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
