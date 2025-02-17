// Mobile redirection and link logic
/* var url = new URLSearchParams(location.search);

if (url.has("mobile", "true") == true){
    console.log("User is on mobile");
    document.querySelectorAll('a').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && !href.startsWith('http')) {  // Only modify internal links
            anchor.setAttribute('href', appendMobileQuery(href));
        }
    });
} else {
    console.log("User is not on mobile");
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'/mobile.html');
}

function appendMobileQuery(url) {
    const queryParam = 'mobile=true';
    const hasQuery = url.includes('?');
    const hasMobile = url.includes(queryParam);
    
    return hasMobile ? url : (hasQuery ? `${url}&${queryParam}` : `${url}?${queryParam}`);
    } */
   
// Disable Dark Reader dynamically
const lock = document.createElement('meta');
lock.name = 'darkreader-lock';
document.head.appendChild(lock);

// Dropdown item functionality
$(function() {
    $(".project").on('click', function() { 
        $(this).parent().find('.details').slideToggle(500);
     });
 });
 
// Fetch and display latest GitHub commit
fetch('https://api.github.com/repos/VeeTH/personal_website/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('latest-commit').innerHTML = res[0].sha.slice(0, 7);
    document.getElementById('commit-link').href = res[0].html_url;
  })

// Randomize Song Spotlight
$(function() {
    if (document.getElementById("index")) {
        console.log("User is on index page");
        
        const spotlightVideos = [
            {title: "Wonderful Opportunity - Bad Girl Online", url: "https://www.youtube.com/embed/BJilwNk1zsM"},
            {title: "Wonderful Opportunity - NARAZUMONO", url: "https://www.youtube.com/embed/X3_bF_apB4M"},
            {title: "Wonderful Opportunity - 鬼KYOKAN", url: "https://www.youtube.com/embed/w9o3ufZnR1Y"},
            {title: "Wonderful Opportunity - 右NOU左NOU", url: "https://www.youtube.com/embed/z_n0ih9fVI4"},
            {title: "Minami no Minami - HIMAN=HIDAI Shousoukyoku", url: "https://www.youtube.com/embed/7lwX62IN4Ig"},
            {title: "Hiraumi - Zunda Mochi no Tsukurikata", url: "https://www.youtube.com/embed/gzYWlSkWFh4"},
            {title: "PolyphonicBranch - Chameleon Love", url: "https://www.youtube.com/embed/sUQPiV0LSjY"},
            {title: "mawashiba - Kidoai Liar", url: "https://www.youtube.com/embed/h6SnFFuxDN4"},
            {title: "Mizenkei - タブロイド", url: "https://www.youtube.com/embed/8wN-WRQMVLk"},
            {title: "Kusoinaka-P - Nekomimi Archive", url: "https://www.youtube.com/embed/7GxXhrePnA0"},
            //{title: "Mafumafu - Super Nuko World", url: "https://www.youtube.com/embed/HtCPMhyBzNU"},
            {title: "Kashii Moimi - Välkommen", url: "https://www.youtube.com/embed/KfpVCrMgbwA"},
            {title: "Mama Kay - Hurry! Hurry!", url: "https://www.youtube.com/embed/erRWHtZqw0s"},
            {title: "Ugly Duckling - I Won't Let It Die", url: "https://www.youtube.com/embed/epIDvFAn9EU"},
            {title: "Ugly Duckling - Slow the Flow", url: "https://www.youtube.com/embed/uM78Y4NWN5Q"},
            {title: "Ugly Duckling - Elevation", url: "https://www.youtube.com/embed/zcbSiqhJHcc"},
            {title: "I Got Back Pain - Jealous", url: "https://www.youtube.com/embed/2lPeHo-LMhY"}
        ];

        let lastIndex = parseInt(localStorage.getItem('lastSongIndex'), 10);
        let spotlightIndex;
        
        do {
            spotlightIndex = Math.floor(Math.random() * spotlightVideos.length);
        } while (spotlightIndex === lastIndex);

        localStorage.setItem('lastSongIndex', spotlightIndex);

        const spotlightSong = spotlightVideos[spotlightIndex];
        document.getElementById('song-spotlight-vid').src = spotlightSong.url;
        document.getElementById('song-spotlight-title').textContent = spotlightSong.title;
    }
});

// Toggle music on Shrine pages
var isPlaying = true;

$('#toggle_bg_music').click(function(){
    $('.yt_player_iframe').each(function(){
        if (isPlaying == true){
            $('.yt_player_iframe').get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            isPlaying = false;
            document.querySelector('#toggle_bg_music').innerHTML = "Play background music";
          } else {
            $('.yt_player_iframe').get(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
            isPlaying = true;
            document.querySelector('#toggle_bg_music').innerHTML = "Pause background music";
          }          
    });
});

// License box modal
$("#licensebox_btn").click(function () {
    $("#licensebox").dialog({
        title: "GitHub License",
        width: 915,
        draggable: false,
        resizable: false,
        modal: true,
        open: function() {
            $("body").css("overflow", "hidden");
        },
        close: function() {
            $("body").css("overflow", "auto");
        },
    })
});

$(document).ready(function() {
    $.get("/LICENSE.md", function(data) {
        const licenseRepoLink = document.createElement("div");
        licenseRepoLink.style.textAlign = "center";
        licenseRepoLink.innerHTML = `<a href="https://github.com/VeeTH/personal_website" target="_blank" style="text-decoration: underline; font-weight: bold;">GitHub Repository link</a>`;
        
        document.getElementById('licensebox_txt').innerHTML = marked.parse(data);
        document.getElementById('licensebox_txt').append(licenseRepoLink);
    });
});
