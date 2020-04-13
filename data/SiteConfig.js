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
**** You can view the code at : github.com/gkampitakis/gkampitakis ****
    
    `,
	siteTitle: 'George Kampitakis',
	siteTitleShort: 'G.Kampitakis',
	siteTitleAlt: 'George Kampitakis Posts',
	siteLogo: '/logos/logo-512.png', // Logo used for SEO and manifest.
	siteUrl: 'https://gatsby-advanced-starter-demo.netlify.com', // Domain of your website without pathPrefix.
	pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
	siteFBAppID: '1825356251115265', // FB Application ID for using app insights
	googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
	disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	postsPerPage: 4, // Amount of posts displayed per listing page.
	userName: 'Advanced User', // Username to display in the author segment.
	userEmail: 'AdvancedUser@example.com', // Email used for RSS feed's author segment
	userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: 'North Pole, Earth', // User location to display in the author segment.
	userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
	userDescription:
		"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
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
			link: '/notes',
			icon: '📝'
		},
		{
			name: 'Contact',
			link: '/contact',
			icon: '📬'
		}
	],
	copyright: 'Copyright © 2020. George Kampitakis', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#c62828', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0' // Used for setting manifest background color.
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
