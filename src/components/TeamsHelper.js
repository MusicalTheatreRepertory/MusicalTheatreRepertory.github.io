import adam from "../images/adam.jpg";
import charlotte from "../images/charlotte.jpg";
import daniel from "../images/daniel.jpg";
import jenelle from "../images/jenelle.jpg";
import karin from "../images/karin.jpg";
import kelly from "../images/kelly.jpg";
import lydia from "../images/lydia.jpg";
import lucas from "../images/lucas.jpg";
import monty from "../images/monty.png";
import theo from "../images/theo.jpeg";
import violet from "../images/violet.jpg";
import mackenzie from "../images/mackenzie.jpg";
import nathan from "../images/nathan.jpg";

import addison from "../images/addison.jpg";
import julian from "../images/julian.jpg";
import micah from "../images/micah.png";
import brooklyn from "../images/brooklyn.jpg";
import gina from "../images/gina.jpg";
import gray from "../images/gray.jpg";
import juno from "../images/juno.jpg";
import kaitlyn from "../images/kaitlyn.jpg";
import keilah from "../images/keilah.jpg";
import namratha from "../images/namratha.jpg";
import paige from "../images/paige.jpg";
import paigeSpeaker from "../images/paigespeaker.png";
import sara from "../images/sara.jpg";
import alexandra from "../images/alexandra.jpg";
import casey from "../images/casey.png";

import abby from "../images/abby.jpg";
import annabel from "../images/annabel.jpg";
import auburn from "../images/auburn.jpg";
import caroline from "../images/caroline.png";
import courtney from "../images/courtney.jpg";
import kiera from "../images/kiera.jpg";
import sev from "../images/sev.jpg";
import jada from "../images/jada.jpg";
import zoelle from "../images/zoelle.jpg";
import maia from "../images/maia.jpg";
import jacob from "../images/jacob.png";

import huck from "../images/huck.jpg";
import jack from "../images/jack.jpg";
import stella from "../images/stella.jpg";
import telisha from "../images/telisha.jpg";
import chloe from "../images/chloe.jpg";
import nic from "../images/nic.jpg";

const cast = [
    {role: "Anya", name: "Mackenzie Jaimes", bio: "Mackenzie Jaimes (she/her) is a senior from Portland, Oregon, majoring in Theatre (Acting Emphasis) with minors in Cinematic Arts and Songwriting. She is so excited to be performing in 'Anastasia' and to be working with such a dedicated team. Previous credits at USC include MTR's 'Once on This Island,' and SDA's mainstage productions of 'A Chorus Line,' 'Anna in the Tropics,' and 'They Never Called It Chavez Ravine.' Mackenzie has loved every moment of this experience and is grateful for the opportunity. Enjoy the show!", img: mackenzie},
    {role: "Dmitry", name: "Theo Herrin", bio: "Theo Herrin (he/him) is a Freshman in USC's BA Theatre Acting Emphasis major. MTR's Anastasia is his college theatre debut. Before coming to USC he lived with his family in Vermont and acted, wrote, and directed for regional and school theatre. In his spare time, he enjoys reading, writing, and playing the cello, piano, saxophone, and drums. He is very excited for you to see Anastasia and hopes you enjoy!!!", img: theo},
    {role: "Vlad Popov", name: "Adam Hassan", bio: "Adam Hassan (he/him) is a performer, pursuing his Bachelor of Arts in Theatre (Emphasis in Musical Theatre) and minors in Dance and Real Estate Finance at USC. With his roots tied to Lebanon and being born and raised in Dubai, UAE- Adam aims to bring different perspectives to the worlds around him by incorporating them into his art forms. Adam has portrayed characters in productions such as Mushnik in 'Little Shop of Horrors', White Rabbit in 'Alice in Wonderland' and Doody in 'Grease'. He is also the Secretary of the MTR Board. Between exploring musicality through thematic lyricism and (too much) reading, he hopes to continue to create many authentic moments on stage forever. Baby Adam courteously thanks the Anastasia team for casting him in his favourite fairy tale. He will long remember... P O P O V", img: adam},
    {role: "Gleb Vaganov", name: "Monty Boxer", bio: "Monty Boxer (he/him) is so excited to be making his MTR debut as Gleb in this production of Anastasia! He is a second-year in the Year 1 BFA Musical Theatre cohort in the School of Dramatic Arts, with a minor in Entertainment Industry from the School of Cinematic Arts. Monty was last seen in the ensemble of USC’s fall production of She Loves Me. He is so grateful to everyone who made Anastasia happen, and can’t wait for everyone to see it. Monty would love to give a shoutout to his mom, dad, brother, grandmother, and all his friends for shaping him into the performer he is today", img: monty},
    {role: "Countess Lily", name: "Lydia Berckley", bio: "Lydia Berckley (Lily) is thrilled to be part of her first MTR production! She is a freshman BFA Musical Theatre major; during her first year at USC, she has gotten heavily involved in SDA, as well as joining Break On Two, a Latin/ballroom dance team, and USC Panhellenic in Delta Delta Delta. Before college, she has performed with Huntsman Entertainment and Millenium Dance Complex in Las Vegas and Theatre Under the Stars, Wildfish Theatre Company, and high school productions in Houston, TX. Some of her favorite productions include: Mamma Mia! (Donna), Chicago (Mama Morton), The Little Mermaid (Andrina), Into the Woods (Baker’s Wife), Bring It On (Truman Cheerleader), and The Secret of My Success (Teen Ensemble). She is so excited to be in this production and work with such a talented cast and creative team. She is also incredibly grateful for her family and friends and their constant support!", img: lydia},
    {role: "Dowager Empress", name: "Karin Naragon", bio: "Karin Naragon (she/her) is a second year graduate student in USC Annenberg's Specialized Journalism program. This is her first time taking the stage in a USC production, and her first theatrical role in almost a decade. At the start of the year, Karin set a goal: to be cast in a musical before the end of 2025. She is grateful to MTR for helping her achieve this goal, and is thrilled to be back in the spotlight with such a welcoming community!", img: karin},
    {role: "Ensemble (Young Anya)", name: "Kelly Hong", bio: "Kelly Hong (she / her) is a freshman BA Theatre major with an emphasis in musical theatre. This is her very first production at USC, and she is so excited to perform again. Kelly is also involved in Breakthrough Hip Hop, enjoys hanging out with friends, crocheting, and exploring LA. Kelly would like to thank her family, friends, and Andrew for their support, and can’t wait for you to see this wonderful show!", img: kelly},
    {role: "Ensemble (Count Ipolitov)", name: "Nathan Bass", bio: "Nathan Bass (he/him), a freshman majoring in Public Policy and minoring in ballet (just kidding - USC actually paid him to not do anything dance related) is positively pumped to be playing Count Ipolitov/Ensemble in his first production at USC! When he’s not embarrassing himself on the dance floor, you can find him rigorously defending the historic and essential art of improv comedy. He’d like to thank his amazing family for coming to see him, his wonderful girlfriend Mary, his awesome friends, and all the great people he’s met through this show. He hopes you have fun keeping track of how many times he dies in this show!", img: nathan},
    {role: "Ensemble (Siegfried)", name: "Lucas Kwan", bio: "Lucas Kwan (he/him) is a first year in the BFA Musical Theatre program. He is making his USC debut with MTR’s Anastasia (Ensemble). He is excited to be taking this journey to Paris again, as his first musical he ever did was Anastasia with the Falcon Playhouse in 2023 (Tsar/Gleb u/s/Drunk #1). Last semester he was part of SC Ballet Company on campus. He is grateful for SC Ballet for helping him prepare for his role as Siegfried in MTR’s Anastasia. He thanks his family and friends as they hold the key to his heart!", img: lucas},
    {role: "Ensemble (Odette)", name: "Jenelle Wong", bio: "Jenelle Wong (she/her) is a freshman in USC SDA’s BFA Musical Theatre program. This is her first production with MTR and she is so excited to be part of this production! Deepest appreciation to friends, family, mentors, and God for everything. She is in awe of the talented and kind people who are involved with Anastasia and is grateful for the creative team and all of their hard work!", img: jenelle},
    {role: "Ensemble (Leopold)", name: "Daniel Stark", bio: "Daniel Stark (he/him) is so ecstatic to be performing in his first MTR show with this supportive and incredibly talented cast. He is studying Theatre with minors in Education and Society and Gender and Social Justice. The overall love for theatre that radiates throughout this cast and production team has made this show stand out as the production of the season. Daniel hopes you all thoroughly enjoy this heart warming and impactful show!", img: daniel},
    {role: "Ensemble (Alexei)", name: "Violet Kaltman", bio: "Violet Kaltman (She/Her) is a freshman in USC's School of Dramatic Arts and the Thornton School of Music pursuing her musical theatre dreams. MTR’s Anastasia is her USC THEATRICAL DEBUT and she absolutely could not be more excited!! Outside of musical theatre, Violet is a proud member of improv/sketch comedy troupe Ludus Remedium and passionately cultivates and collects all forms of rare and exotic fruit. DM (@violet_kaltman) for all fruit inquires.", img: violet},
    {role: "Ensemble (Anya Understudy)", name: "Charlotte Marchioli", bio: "Charlotte Marchioli is a freshman at USC, pursuing a B.A. in Musical Theatre. Originally from the one-square-mile town of Sea Cliff, New York, she is beyond honored to make her MTR debut while understudying a role she has dreamed of playing for years. Previous credits include Hope (Urinetown), Dee Dee Allen (The Prom), Helena (A Midsummer Night’s Dream), Maria (Twelfth Night), Cheshire Cat (The Adventures of Alice in Wonderland), Mayor (Inherit the Wind), and more. When she’s not on stage, she can be found playing guitar, crafting, or making a fool of herself with her improv troupe, Commedus Interruptus. Endless gratitude to my friends and family, both near and far, for their unwavering support in my journey toward my dreams. Who knows where this road may go...", img: charlotte},

]

const creative = [
    {role: "Director", name: "Grayson Abdalla", bio: "Grayson Abdalla (she/her) is a Senior in USC's Animation + Digital Arts major with minors in Marketing and Themed Entertainment. He has produced six shows at USC, including the song-cycle 'Off The Record'; MTR's productions of 'She Loves Me'; and the Black Art Collective's 'The Colored Museum'. Despite his main passion of producing and production management for film, Grayson has dipped his toes into the world of directing with this production of 'Anastasia'. It was the perfect way to end his 4 year career at MTR. In his spare time, Gray likes to annoy his roommates, who have snuck their way onto the special thanks of every MTR production he's worked on (try and spot them in the program of this one). Grayson is, unfortunately, British.", img: gray},
    {role: "Assistant Director", name: "Juno Wolfe", bio: "Juno Wolfe is a Senior double majoring in History & Narrative Studies. This is their second time being part of an MTR production team, following last year's production of 'A New Brain', and they are so excited to finish their undergrad career with the lovely cast of 'Anastasia'. In her spare time, Juno likes to write, draw, and hunt through LA's flea markets.", img: juno},
    {role: "Music Director + Conductor ", name: "Julian Gajewski", bio: " Julian Gajewski (he/him) is a Freshman studying Legal Studies, and he is beyond excited to be a part of another MTR show! This is his first time being part of the creative team, previously, he was the pianist on last semester’s production of 'Falsettos'. You can probably catch Julian at the USG office, but in his free time, he enjoys going out for dinner and being with his friends. He hopes you relax and enjoy the sights surrounding the Neva River!", img: julian},
    {role: "Choreographer ", name: "Brooklyn Lopez", bio: "Brooklyn Lopez (she/her) is a Freshman in USC Dornsife as a History major. This is her first time being part of a production team on a show at USC, which she is very happy MTR took her on board for this opportunity! Musical theatre has been a part of her life ever since she first performed at her middle school. In her spare time, she likes hanging out with family & friends, going to the beach, playing with her dogs, singing, and watching movies. Brooklyn loved getting to choreograph this show and work with all of the people who made 'Anastasia' happen. She dedicates her work on this project to her sister and hopes everyone loves it!", img: brooklyn},
    {role: "Stage Manager ", name: "Addison Wozniczka", bio: "Addison Wozniczka is ecstatic to be stage managing MTR’s production of Anastasia: the Musical! She is a first-year majoring in theatre with passions for directing, music, and all things production/management. Last semester, she worked on MTR's Falsettos as the Assistant Music Director and Conductor, Stage Managed dftc’s Rocky Horror Picture Show, and was the dramaturg for ATC's Danny and the Deep Blue Sea. When not at rehearsal, Addison can likely be found in TCC Plaza. She is eternally grateful for the opportunity to work with MTR again and would like to thank her ASM Paige as well as the rest of the creative team and cast for all the energy and support throughout the process, and hopes you enjoy the show!", img: addison},
    {role: "Assistant Stage Manager", name: "Paige Iacobacci", bio: " Paige Iacobacci (she/her) is a Freshman majoring in Cinema and Media Studies. She is from Pennsylvania and has been doing theater since she was 12. This is her first time assistant stage managing and her first show with MTR. She is also a member of Women of Cinematic Arts and Theater Showcase Group. In her free time she writes, paints, and sings. Paige is thrilled to be a part of Anastasia and can't wait for everyone to watch!", img: paige},
    {role: "Dramaturg", name: "Micah Slater", bio: "Micah is a graduating senior in Cinema and Media Studies with a minor in Russian Language and Culture. He worked on Virgin Creek and Hellcats with ART/EMIS, Collective Rage with dftc, and was last with MTR on She Loves Me as a sound designer. He hopes you enjoy the show and understand that sometimes historical inaccuracies are written into the script and there’s nothing he can do about it.", img: micah},
    {role: "EDIA Coordinator", name: "Gina Phu", bio: "Gina Phu (she/her) is a Senior in Cinema and Media Studies with minors in Computer Programming and Entertainment Industry. This is her first time working with MTR, and she is so excited to end the semester being involved in something she loves. This semester Gina also co-directed a film called 'Asterism' with the Trojan Stunt Team. Gina is thankfully not British and likes to make fun of Gray for being so. Enjoy the show! <3", img: gina},
    {role: "Producer + Music Coordinator", name: "Namratha Kasalanati", bio: "Namratha V. Kasalanati (she/her) is a composer, pianist, cellist, and community activist, currently pursuing her Bachelor of Music in Composition and a Bachelor of Science in Economics/Mathematics at USC. Hailing from the Bay Area, her work aims to bring attention to the diverse musical traditions around the world, focusing on the intersections between Western and Indian classical music. Some of her notable composition teachers have been Dr. Donald Crockett, Dr. Veronika Krausas, Brian Head, and Camae Ayewa (Moor Mother). She has also studied conducting with Sharon Lavery and orchestration with Dr. Frank Ticheli, Dr. Juan Pablo Contreras, and Mark Weiser. Beyond the classical sphere, she has composed for fifteen short films, one of which was screened at the Ojai Film Festival in 2023. This is her fourth MTR production, her second time producing, and she’s so inspired by the Anastasia team’s creativity, passion, and . In her spare time, she loves to read fantasy novels, triple jump, and enjoy a pack of Sour Skittles (or Gummy Clusters) every now and then.", img: namratha},
    {role: "Producer + Music Coordinator", name: "Alexandra Somodi", bio: "Alexandra Somodi (she/her) is a Junior studying Computer Engineering & Computer Science with a double major in Pharmacology & Drug Development. This is her third time being part of an MTR pit ensemble, and first time serving as a producer and music coordinator, following past productions of 'Fun Home' and 'Falsettos'. She loves MTR and looks forward to working on their shows every semester! In her free time, Alexandra loves to try new coffee shops and go hiking. Alexandra is super excited for you to see the show and hopes you enjoy!", img: alexandra},
    {role: "Producer ", name: "Sara Gutierrez ", bio: "Sara Gutierrez is a Sophomore Stage Management major with a minor in Music Industry. Sara has worked on the stage management team of 4 SDA productions and is excited to try something new! A member of MTR Sara is producing her first show and working on her first production with MTR! Sara is also the Assistant Producer for Fourth Quater All-Stars sketch comedy troop and recently closed on USC SDA’s production of Troilus and Cressida as the Production Stage Manager.", img: sara},
    {role: "Production Manager", name: "Kaitlyn Chaidez", bio: " Kaitlyn Chaidez (She/Her) is a BFA Stage Management Major and set to graduate in 2026! She finds great passion in orchestrating the behind-the-scenes magic that brings a production to life, Anastasia being her 2nd production with MTR. She aspires to one day produce a staged adaptation of Pitch Perfect: The Musical and also become the president of the United States. In her free time, Kaitlyn is most likely sonny angel hunting, thrifting on Melrose, or creating a dope ass spreadsheet. You can find her cafe hopping on her youtube channel @lav3nder4luck. Catch her as she rises to be LA’s hottest new influencer. Shoutout to her 3 wives.", img: kaitlyn },
    {role: "Assistant Production Manager + Ballet Choreographer", name: "Keilah Stephanie Mora ", bio: "Keilah is a Sophomore BFA Stage Management major with a Minor in Dance in Entertainment. In her free time Keilah loves going to the beach, eating at Urth Caffe, watching musicals, and playing with her dog, Hazel. This is her first production working with MTR and is so thrilled! Keilah is so happy to continue her adventures with MTR and hopes you enjoy the show. Big thanks to everyone who has made this production happen! ", img: keilah },
    {role: "Assistant Production Manager", name: "Paige Speaker", bio: "Paige Speaker is a Sophomore double majoring in Theater and Law, History, and Culture. She is elated to be working with MTR again this semester after working on 'Falsettos' last semester, this time as co-APM. Paige is a stage manager by trade, but in her free time enjoys baking, making spreadsheets, and remembering her once forgotten family due to a music box her grandmother gave her.", img: paigeSpeaker },
    {role: "Fight Choreographer", name: "Casey Fleming", bio: "Casey Fleming (he/they) is a Senior Narrative Studies and Themed Entertainment major who lazily asked the director to write their bio and then revised it twice. Their position in the evil student group called ‘Trojan Stunt Team’ gave them the opportunity to work on this brilliant show with so many of their good friends. They have worked on several MTR and ISP productions including writing three shows of their own! Catch the latest edition to the Casey Fleming bibliography in two weeks here at the Scene Dock. They are eternally grateful and forever indebted to Grayson.", img: casey}    
]

const design = [
    {role: "Costume Designer", name: "Jada Leung ", bio: "Jada Leung (she/her) is a freshman English major. This is her second show at USC, following MTR's 'Falsettos' because she is an MTR groupie 4 life. She probably shouldn't be in charge of things, including writing this bio, but she hopes you'll enjoy the costumes regardless! Beyond costuming, her hobbies include being super funny and smart. Finally, she would like to use this platform to advocate caring about things---'tis the season of putting in effort and giving your work to the world. Thanks always to the rest of the costume team and this wonderful crew.", img: jada },
    {role: "Assistant Costume Designer ", name: "Annabel Roubinowitz ", bio: "Annabel Roubinowitz (she/her) is a Business Administration Major at Marshall school of Business. In her spare time, she enjoys assembling extravagant outfits she’ll never have an occasion to wear and watching bootlegs of off-broadway productions starring Barrett Wilbert Weed. This is her first time being apart of an MTR production and she’s so excited to be on the team. She hopes you enjoy the show!", img: annabel },
    {role: "Prop Designer", name: "Sev Krauss-McClurg ", bio: "Sev Krauss-McClurg (he/him) is excited to be joining MTR for the first time on Anastasia. He is a freshman technical direction major. He previously has worked on two other ISPs as props manager. Sev is grateful for the opportunity to work alongside such a great group of people!", img: sev },
    {role: "Assistant Props Designer ", name: "Auburn D'Artell ", bio: "Auburn D'Artell (he/they) is a Sophomore in USC's BA Theatre Design major. This is his sixth time working on a show at USC, following last year's productions of 'As You Like It', 'Machinal', and 'Falsettos.' In his free time, Auburn likes to cosplay and dress up his cat, Miss Blanca. He is so grateful for this opportunity to work with Sev on props and the entire team on this production and he hopes you enjoy Anastasia!", img: auburn },
    {role: "Sound Designer", name: "Courtney Chu", bio: "Courtney Chu is a sophomore majoring in Human Biology. She is so excited to be working on her fourth MTR show! Previous sound design credits include ‘The Wolves’, ‘Moonshine and Canned Pasta’, ‘Gruesome Playground Injuries’, and ‘The Little Mermaid’. She is thrilled to be sound designing for this show and hopes you enjoy!", img: courtney },
    {role: "Assistant Sound Designer ", name: "Zoelle Pierce", bio: "Zoelle Pierce (she/her) is a Junior in the BFA sound design program at USC. She's been involved in many a show at USC including 'Machinal' and 'Twelve Angry Jurors'. Enjoy the show!", img: zoelle },
    {role: "Lighting Designer ", name: "Jacob Hollens", bio: "Jacob Hollens (he/him) is a Senior BA Theatre major (emphasis in Design) He really hopes you enjoy the show!", img: jacob },
    {role: "Assistant Lighting Designer ", name: "Caroline Fedigan ", bio: "Caroline Fedigan (she/her) is a freshman in USC’s music industry major. This is her first show with MTR, but her 8th time being on the lighting team for a musical. Caroline is very grateful to be working on a show she has wanted to work on for forever, and the opportunity to work with a wonderful cast and crew. She has a passion for lighting that she peruses through Trojan Event Services and hopefully more MTR shows in the future. She hopes you enjoy the show!", img: caroline },
    {role: "Set Designer ", name: "Kiera Reinhard ", bio: "Kiera Reinhard (She/Her) is a Junior BFA Theatrical Design major and Cinematic arts minor. This is Kiera's first time working with MTR. Other shows Kiera have worked on here at USC include 'She Loves Me' in the bing theater, 'Troilus and Cressida', 'Broken Shells', and ' The Laramie Project' . After the show Kiera hopes to go into complete hibernation, only to re-emerge for her 21st birthday. She would love to thank her lovely assistant Maia and TD Abby!", img: kiera },
    {role: "Assistant Scenic Designer", name: "Maia Tumbokon", bio: "Maia Tumbokon (she/her) is a Freshman in the BFA Theatrical Design major with an emphasis in Scenic/Lighting Design. This is her first time being part of a show at MTR and she is very excited and grateful for this opportunity. In her spare time, Maia likes to crochet, paint, and sleep. Maia hopes you enjoy the show!", img: maia },
    {role: "Technical Director", name: "Abigail Soroka", bio: "Abigail Soroka (she/her) is a Sophomore BFA Technical Direction major. Other productions at USC include: 'Angels in America Part 1: Millennium Approaches,' 'As You Like It,' 'Rent,' and 'Dance Nation.' She has also worked as a Stage Manager, Scenic Designer, and bookseller. Abby is a figure skater and likes to bake and read. She hopes you enjoy the show!", img: abby },
    ]

const pit = [
    {role: "Conductor", name: "Julian Gajewski", bio: " Julian Gajewski (he/him) is a Freshman studying Legal Studies, and he is beyond excited to be a part of another MTR show! This is his first time being part of the creative team, previously, he was the pianist on last semester’s production of 'Falsettos'. You can probably catch Julian at the USG office, but in his free time, he enjoys going out for dinner and being with his friends. He hopes you relax and enjoy the sights surrounding the Neva River!", img: julian},
    {role: "Keyboard", name: "Hongyu Lin", bio: "Jack Lin (he/him) is a senior studying Applied Math and Computer Science. After playing in the pit for 'Once On This Island' in 2022 Fall and 'Falsettos' last Fall, he is thrilled to join the pit again for another MTR’s show. In his spare time, Jack also plays the keyboard and saxophone in CreSCendo, a Chinese pop band at USC, as well as accompanying for other start-up singers. Jack is very excited for this show and hopes you enjoy!", img: jack},
        {role: "Reed 1", name: "Alexandra Somodi ", bio: "Alexandra Somodi (she/her) is a Junior studying Computer Engineering & Computer Science with a double major in Pharmacology & Drug Development. This is her third time being part of an MTR pit ensemble, and first time serving as a producer and music coordinator, following past productions of 'Fun Home' and 'Falsettos'. She loves MTR and looks forward to working on their shows every semester! In her free time, Alexandra loves to try new coffee shops and go hiking. Alexandra is super excited for you to see the show and hopes you enjoy!", img: alexandra },
        {role: "Violin 1", name: "Stella Gonzales ", bio: "Stella is a Senior at USC studying architecture with a minor in cinematic arts! This is her first time being part of the pit with MTR! In her spare time she loves to draw, spend time with friends, and travel! Stella is excited to be a part of Anastasia and hopes you all enjoy!", img: stella},
        {role: "Violin 2", name: "Chloe Bay ", bio: "Chloe Bay is a freshman at USC pursuing at BA in Theater (Acting) with a minor in Spanish. This is her first time playing pit orchestra, and she’s super excited! She has been playing violin since she was 7, and was a member of i Solisti orchestra for 5 years. On campus, she is a member of The Merry Men improv troupe, the Co-Social Chair for Aeneid Theater Company, and the Assistant Social Chair for Impulse Theater Company. Past roles include Rhesus (ATC, Chorus C/Athena), The Mousetrap (Molly), Trevor (Ashley), A Midsummer Nights Dream (Helena), The Witch of Edmonton (Winifred), and more.", img: chloe},
        {role: "Cello", name: "Nicolas Lam", bio: "Nicolas 'Nick' Lam (he/him) is a Sophomore in USC's Biopharmaceutical Sciences major. This is his first time being a part of the pit on a show at USC with previous experience in productions of 'Frozen' and orchestral work. In his free time, Nick enjoys snowboarding, napping, and trying to befriend the cats on his street 😸 He is enthusiastic to be a part in another production and is looking forward to many more!", img: nic },
        {role: "Bass", name: "Huckleberry Young", bio: "Huckleberry 'Huck' Young (he/him) is a Freshman Jazz major deeply interested in musical theater. This is Huck's debut performance with MTR. In his free time Huck loves to jam with his roommates and watch movies. Huckleberry hopes you love the music and are ready to enjoy the show!!", img: huck},
        {role: "Euphonium", name: "Telisha Ransome", bio: "Telisha Ransome (she/her) is a Sophomore in USC’s Accounting major! She has been playing brass for 9 years and is happy to be back in the pit! She has been a part of previous pits before, including 'Shrek: The Musical' and Beauty and the Beast'! This is her first time in an MTR production and can’t be more excited! In her free time, Telisha reads, goes to the gym, and skydives regularly.", img: telisha },
]
        
    
export { cast, creative, design, pit };