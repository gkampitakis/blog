const config = {
	consoleMessage: `       
    
    
                    '..----..'                    
              '-+oyhhddddddddhhyo/-'              
           .+yhddddddddddddddddddddhy+.           
        '/yhdddddddddmmmmmmmmdddddddddhy/'        
       /hhddddddmmmmmmmmmmmmmmmmmmddddddhh/'      
     -yhddddddmmmmmmmmmmmmmmmmmmmmmmddddddhy-     
    /hhddddddmmmmmmmmmmmmmmmmmmmmmmmmddddddhh/    
   +hhddhso+////+oydmmmmmmmmmmdyo+////+oshddhh/   
  :hhdh+::+syhhys+::+dmmmmmmd+::+syhhys+::+hdhh:  
 'yhhy::+dNNMNddNNdo::ymmmmy::odNNddNMNNd+::yhhy' 
 :hhh:-omNNN/-:-.sNNs-:++++--sNNs-::./NNNmo-:hhh: 
':/:---dNNNd.-::--NNm---::---mNN--::-.dNNNd---:/:'
--://--yNNNNy/::+dNNd--ohhs--hNNd+::/yNNNNy--//:--
':yyy/-:hmNNNNNNNNmd:-/dddd/-:dmNNNNNNNNmh:-/yyy:'
 :yhhy/--+ydmmmmmy+--/hddddh/--+ymmmmmdy+--/yhhy: 
 'syhhys/-..-:::-.-/ydddddddhy/-.-:::-..-/syhyys' 
  :yyyhyyyso++++oyhhhddddddddhhhyo++++osyyyhyyy-  
   /yyyyyyyyyyhhhhhhhddddddddhhhhhhhhyyyyyyyyy/   
    /yyyyyyyo'.:+syhhhhhhhhhhhhhhhhhhhyyyyyyy/    
     -syyyyyys+-....::/+++oo+++//:syyyyyyyys-     
       :syyyyyyyys+/::--------::/+yyyyyyys:       
        ':osyyyyyyyyyhhyyyyyhhyyyyyyyyso:'        
           ./ossyyyyyyyyyyyyyyyyyssso/.           
              '-/+osssssssssssso+/-'              
                    '..-.....'                   
    
**** This project is created by G.Kampitakis ****
**** You can view the code at : github.com/gkampitakis/posts ****
    
    `,
	siteTitle: 'George Kampitakis',
	siteTitleShort: 'G.Kampitakis',
	siteTitleAlt: 'George Kampitakis Posts',
	siteLogo: '/logos/logo-32.png',
	siteUrl: 'https://gkampitakis.github.io',
	pathPrefix: '/blog', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription:
		'I love coding and learning new things, so this is a portal for sharing what I find interesting. My current focus is on modern Javascript, Node.js, and development',
	googleAnalyticsID: 'UA-155519688-1',
	dateFromFormat: 'DD-MM-YYYY', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	userName: 'George',
	userEmail: 'gkabitakis@gmail.com',
	userTwitter: 'g_kampitakis',
	userLocation: 'London, UK',
	instagram: 'https://www.instagram.com/g.kampitakis/',
	socialLinks: [
		{
			label: 'GitHub',
			url: 'https://github.com/gkampitakis',
			image: 'gh'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/g_kampitakis',
			image: 'twitter'
		},
		{
			label: 'Linkedin',
			url: 'https://www.linkedin.com/in/gkampitakis/',
			image: 'ln'
		}
	],
	menuLinks: [
		{
			name: 'Home',
			link: '/',
			icon: '🏡'
		},
		{
			name: 'Notes',
			link: '/',
			icon: '📝'
		},
		{
			name: 'Contact',
			link: '/',
			icon: '📬'
		}
	],
	themeColor: '#3F80FF',
	backgroundColor: '#ffffff'
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = '';
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
