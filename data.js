const movies = [
  {
    name: "Court: State vs. A Nobody",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A passionate defense attorney fights against prejudice and corruption in the justice system while representing a teenage client wrongly presumed guilty of a serious action.",
    stars: "Sri Devi, Harsh Roshan, Sai Kumar",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Court_-_State_Vs_A_Nobody.jpg/250px-Court_-_State_Vs_A_Nobody.jpg"
  },
  {
    name: "Mahavatar Narsimha",
    genre: "action",
    OTT: "Netflix",
    synopsis: "Le démon Hiranyakashyap cherche à se venger de Vishnu et se proclame dieu. Vishnu se manifeste sous la forme de Narsimha pour rétablir l'équilibre.",
    stars: "Aditya Raj Sharma, Haripriya Matta, Sanket Jaiswal",
    poster: ""
  },
  {
    name: "Chhaava",
    genre: "action",
    OTT: "Netflix",
    synopsis: "Un drame historique basé sur la vie de Chhatrapati Sambhaji Maharaj, le fils de Chhatrapati Shivaji Maharaj.",
    stars: "Vicky Kaushal, Akshaye Khanna, Rashmika Mandanna",
    poster: ""
  },
  {
    name: "Dragon",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "After a devastating breakup, troubled student Ragavan enters the dangerous world of financial fraud, pursuing wealth and power.",
    stars: "Pradeep Ranganathan, Anupama Parameswaran, Kayadu Lohar",
    poster: "https://m.media-amazon.com/images/M/MV5BNWZmNGE1NzItZWVhMi00NjdhLWE1OWYtNjUwMWRmMWQ4ZjJjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Little Hearts",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "After failing EAMCET, Akhil joins coaching where he meets Khatyayani. He pursues her heart through a humorous journey of personal growth.",
    stars: "Mouli Tanuj Prasanth, Shivani Nagaram, Rajeev Kanakala",
    poster: "https://cdn.district.in/movies-assets/images/cinema/G%20little-hearts%20(1)-cbb99170-8713-11f0-b558-7978ea3a4641.jpg"
  },
  {
    name: "Kaantha",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "In 1950s Madras, tension between a legendary director, an egotistical leading man, and a young starlet lead to murder on the film set.",
    stars: "Dulquer Salmaan, Bhagyashri Borse, Samuthirakani",
    poster: ""
  },
  {
    name: "K-Ramp",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Rich businessman Krishna sends his wayward son Kumar to Kerala for reform, where he falls for Mercy, a girl with PTSD.",
    stars: "Vennela Kishore, Sai Kumar, Kiran Abbavaram",
    poster: ""
  },
  {
    name: "Anaganaga",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A school teacher uses innovative storytelling methods to help struggling students, overcoming various challenges to achieve his goal.",
    stars: "Srinivas Avasarala, Bunny Arumalla Benjohn, Kajal Choudhary",
    poster: "https://i.redd.it/anaganaga-new-poster-v0-r5ou0l9703je1.jpg?width=1440&format=pjpg&auto=webp&s=31c356ac10cb6999bc62586f4bdf6b491a0b982f"
  },
  {
    name: "Kishkindhapuri",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "During a ghost tour, visitors enter an old radio station where they disturb a dormant spirit and must find a way to escape.",
    stars: "Sai Srinivas Bellamkonda, Anupama Parameswaran, Sandy Master",
    poster: ""
  },
  {
    name: "8 Vasanthalu",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "Writer Shuddhi channels grief through writing, then experiences love and heartbreak with Varun, leading to personal transformation.",
    stars: "Ananthika Sanilkumar, Ravi Theja Duggirala, Sanjana Hardageri",
    poster: "https://m.media-amazon.com/images/M/MV5BMGU1YzY4NjQtYTA0ZS00OTRkLWI1YWItM2FkMGFjZDk4ODFmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Shambhala",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "When a meteor crashes into a superstitious village, strange supernatural events unfold, force an atheist scientist to face an ancient horror.",
    stars: "Swasika Vijay, Aadi, Archana Iyer",
    poster: "https://m.media-amazon.com/images/M/MV5BYTQyN2QxNzQtMzBkNC00YjU1LTkzMGMtYjA0ZTE3OWIzNDE4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Telusu Kada",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "A young man finds himself entangled in an emotional love triangle between two women, forcing him to confront deep questions about identity.",
    stars: "Raashi Khanna, Srinidhi Shetty, Harsha Chemudu",
    poster: ""
  },
  {
    name: "Bhadrakali",
    genre: "action",
    OTT: "Jio Hotstar",
    synopsis: "A bold fighter of the people challenges a merciless titan, sparking a wave of justice, uprising, and vengeance.",
    stars: "Vinod Anand, Vijay Antony, Kannan Arunachalam",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0QVtFFrtqkO3DezM08fNEIUa5l0Msn0tVQ&s"
  },
  {
    name: "Eleven",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "A brave and skilled officer with a strong record is assigned to a new, more challenging serial killing investigation.",
    stars: "Naveen Chandra, Abhirami, Aadukalam Naren",
    poster: ""
  },
  {
    name: "Thudarum",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "Humble taxi driver Shanmughan treasures his aging Ambassador car. When fate puts him to the test, he must prove how far he'll go.",
    stars: "Mohanlal, Shobana, Bharathiraja",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8ucENY0cWGWaNZdW4L-fKnxya21hp3pHWA&s"
  },
  {
    name: "Padakkalam",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "Four nerdy comic book enthusiasts find themselves in an adventure when their new professor turns their world upside down.",
    stars: "Suraj Venjaramoodu, Sharafudheen, Sandeep Pradeep",
    poster: ""
  },
  {
    name: "Subham",
    genre: "horror",
    OTT: "Jio Hotstar",
    synopsis: "A group of married men band together after their wives become transfixed by a cable TV soap opera serial.",
    stars: "Samantha Ruth Prabhu, Shriya Kontham, Shravani Lakshmi",
    poster: ""
  },
  {
    name: "Single",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "A charming bachelor who, despite being adored by two women, is resolute in his decision to remain single.",
    stars: "Sree Vishnu, Ketika Sharma, Ivana",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjJjdsBIwj6KZ8Ka_8V3m_Cf2AX3Ec6ju5A&s"
  },
  {
    name: "Aan Paavam Pollathathu",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A middle-class husband struggles to accept his wife's modern, progressive attitudes, creating tension in their marriage.",
    stars: "Rio Raj, Malavika Manoj, Rj Vigneshkanth",
    poster: ""
  },
  {
    name: "Raju Weds Rambai",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A rustic tragic love story based on real events that occurred between Khammam and Warangal regions.",
    stars: "Akhil Uddemari, Tejaswini Rao, Chaitu Jonnalagadda",
    poster: ""
  },
  {
    name: "Dhandoraa",
    genre: "drama",
    OTT: "Aha",
    synopsis: "Raw action where laughs and emotion crash into stark realities. Earthbound stories pulse with defiance and hope.",
    stars: "Mounika, Aditi Bhavaraju, Sivaji",
    poster: ""
  },
  {
    name: "Maargan",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Cop Dhruv from Mumbai police hunts a serial killer targeting young girls with a burning drug.",
    stars: "Vijay Antony, Seshvitha, Kanimozhi, Samuthirakani",
    poster: ""
  },
  {
    name: "The Great Pre-Wedding Show",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A young couple navigates the chaotic world of pre-wedding photography, facing unexpected hurdles.",
    stars: "Rohan Roy, Tinu Shravya, Thiruveer Reddy",
    poster: ""
  },
  {
    name: "3BHK",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A middle-class family battles financial hurdles while pursuing their dream of owning a home in the city.",
    stars: "Siddharth, R. Sarathkumar, Devayani",
    poster: ""
  },
  {
    name: "Kanyakumari",
    genre: "comedy",
    OTT: "Zee5",
    synopsis: "A farmer and an ambitious tech girl fall in love despite contrasting worlds and social differences.",
    stars: "Bhadram, Muralidhar Goud, Sreecharan Rachakonda",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Kanya_Kumari_%28film%29.jpg/250px-Kanya_Kumari_%28film%29.jpg"
  },
  {
    name: "DNA",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "A mom with BPD believes her baby was switched. Her husband races to find their real child.",
    stars: "Mohd. Zeeshan Ayyub, Atharvaa Murali, Nimisha Sajayan",
    poster: "https://m.media-amazon.com/images/M/MV5BMGVkNDBhOTAtOTdmYi00MGEyLTg2ZDktYTdhYzIzNDUyZDAzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Veera Dheera Sooran: Part 2",
    genre: "action",
    OTT: "Netflix",
    synopsis: "Kaali, a provision store owner, gets involved in a dangerous action network for a mysterious mission.",
    stars: "Vikram, Anjali P Nair, Suraj Venjaramoodu",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/veera-dheera-sooran--part-2-et00423507-1742972468.jpg"
  },
  {
    name: "Baapu",
    genre: "drama",
    OTT: "ETV Win",
    synopsis: "A farming family seeks to escape their debts, believing one member's death may be the answer.",
    stars: "Racha Ravi, Aamani, Mani Aegurla",
    poster: ""
  },
  {
    name: "Dude",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "Childhood friends Agan and Kural are inseparable. Agan must balance hidden feelings for Kural.",
    stars: "Pradeep Ranganathan, Mamitha Baiju, Neha Shetty",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyQ_xCNLfK61Skpi1kLRFtn0gafFs9Az_Vg&s"
  },
  {
    name: "Kalamkaval",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "A Kerala Police investigation escalates when small clues expose multiple disturbing cases.",
    stars: "Mammootty, nayakan, Rajisha Vijayan",
    poster: ""
  },
  {
    name: "Paanch Minar",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "After a tragedy at his father's party, Chotu inherits a action empire and discovers betrayal.",
    stars: "Nithin Prasanna, Raj Tarun, Rashi Singh",
    poster: ""
  },
  {
    name: "Mad Square",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "Three college buddies navigate campus life, leading to wild adventures and laughs.",
    stars: "Sangeeth Shobhan, Narne Nithiin, Ram Nithin",
    poster: ""
  },
  {
    name: "Akkada Ammayi Ikkada Abbayi",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "An engineer must build bathrooms in a village that forbids contact with its only woman.",
    stars: "Brahmaji, Brahmanandam, Muralidhar Goud",
    poster: "https://m.media-amazon.com/images/M/MV5BMDVkMDZmM2EtZGM0OC00MWI3LWFiMzQtOGFhNDEzMzEyZWNkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Mayasabha: Rise of the Titans",
    genre: "series",
    OTT: "ETV Win",
    synopsis: "Two rival politicians rise through Andhra Pradesh's power structure in the 1970s-80s.",
    stars: "Aadhi, Chaitanya Rao, Sai Kumar",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZm8aIz1W1lHILFlW3rAu6JvnV4xYXTEWeQ&s"
  },
  {
    name: "Air",
    genre: "series",
    OTT: "Netflix",
    synopsis: "Three students unite at an elite college to challenge the system's rigid expectations.",
    stars: "Harsh Roshan, Bhanu Prakash, Jayateertha",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvGAcZfejasPl5-sZTjovDRaoXFST6_xM_Q&s"
  },
  {
    name: "Sivarapalli",
    genre: "series",
    OTT: "Aha",
    synopsis: "An urban engineer takes a job as a Village Secretary after failing to find other work.",
    stars: "Muralidhar Goud, Rag Mayur, Sunny Palle",
    poster: ""
  },
  {
    name: "Constable Kanakam",
    genre: "series",
    OTT: "Prime Video",
    synopsis: "A constable finds strength when her friend becomes a victim of mysterious forest disappearances.",
    stars: "Varsha Bollamma, Srinivas Avasarala, Ramana Bhargav",
    poster: ""
  },
  {
    name: "Committee Kurrollu",
    genre: "comedy",
    OTT: "ETV Win",
    synopsis: "In a peaceful West Godavari village, the harmony of a close-knit friend group is disrupted when a disagreement leads to an unexpected fallout, impacting their lives and the tranquility of their community.",
    stars: "Prasad Behra Ramana Bhargav Kota Jayaram",
    poster: ""
  },
  {
    name: "Lucky Baskhar",
    genre: "action",
    OTT: "Netflix",
    synopsis: "A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering.",
    stars: "Dulquer Salmaan Meenaakshi Chaudhary Tinnu Anand",
    poster: ""
  },
  {
    name: "Gaami",
    genre: "thriller",
    OTT: "Zee5",
    synopsis: "Shankar, an amnesiac Aghori who suffers from the fear of touch, goes on a dangerous Himalayan trail in search of a mythical cure for his condition. What happens when his past uncovers the way for him?",
    stars: "Vishwak Sen Abhinaya Mohammad Samad",
    poster: ""
  },
  {
    name: "Janaka Aithe Ganaka",
    genre: "drama",
    OTT: "Aha",
    synopsis: "A young married man rejects parenthood, calculating costs for a child's upbringing. He determines his income insufficient for education, quality of life, and other expenses, leading to his decision against having children at that time.",
    stars: "Suhas Sangeerthana Vipin Vennela Kishore",
    poster: ""
  },
  {
    name: "35-Chinna Katha Kaadu",
    genre: "drama",
    OTT: "Aha",
    synopsis: "Revolves around a young mother facing challenges when her son fails to secure passing marks, igniting events that test the family's resilience and unity.",
    stars: "Abhay Ananya Bhagyaraj",
    poster: ""
  },
  {
    name: "Tillu Square",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "One year after a love affair entangled him in a murder case, a hapless DJ has a one-night stand that leads to even messier kerfuffles tied to his past.",
    stars: "Anupama Parameswaran Murli Sharma Raj Tirandasu",
    poster: ""
  },
  {
    name: "The Goat Life",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "An Indian man seeking work follows a job lead to Saudi Arabia, only to find himself forced to labor without pay as a goat herder in the remote desert.",
    stars: "Prithviraj Sukumaran Jimmy Jean-Louis K.r. Gokul",
    poster: ""
  },
  {
    name: "Kill",
    genre: "action",
    OTT: "Jio Hotstar",
    synopsis: "During a train trip to New Delhi, a pair of commandos face an army of invading bandits.",
    stars: "Lakshya Raghav Juyal Tanya Maniktala",
    poster: ""
  },
  {
    name: "Maharaja",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "A barber seeks vengeance after his home is burglarized, cryptically telling police his lakshmi has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive lakshmi unfolds.",
    stars: "Vijay Sethupathi Anurag Kashyap Mamta Mohandas",
    poster: "https://images.moviebuff.com/c5ba304d-1231-4042-bf0d-e8b595f5a179?w=1000"
  },
  {
    name: "Razakar: The Silent Genocide of Hyderabad",
    genre: "action",
    OTT: "Zee5",
    synopsis: "Revolves around the Hyderabad Liberation Movement of 1948. Capture the struggles of Telangana and its people in the early days of Independence to reclaim their religion and identity in the face of military and political oppression.",
    stars: "Raj Arjun Bobby Simha Anasuya Bharadwaj",
    poster: ""
  },
  {
    name: "Bachhala Malli",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "Spanning various periods in a man's life, this dark, real world action uses jumps in time to explore the sometimes drastic and shocking consequences of familial and romantic strife",
    stars: "Allari Naresh Amritha Aiyer Rao Ramesh",
    poster: ""
  },
  {
    name: "Zebra",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "A group of white collar fraudsters become entangled with a vicious criminal as they plan an audacious heist.",
    stars: "Satyadev Kancharana Priya Bhavani Shankar Dhananjaya",
    poster: ""
  },
  {
    name: "Veeranjaneyulu Vihara Yatra",
    genre: "drama",
    OTT: "ETV Win",
    synopsis: "A dysfunctional family sets off on a road trip to immerse the grandfather's ashes in Goa and action ensues.",
    stars: "Brahmanandam Eswara Uday Sai Kiran Sri Lakshmi",
    poster: ""
  },
  {
    name: "Sathyam Sundharam",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A man's life is changed when he bumps into someone from his hometown in this moving Tamil-language action; gentle scenes are occasionally punctuated by sporting threat and recollections of violence.",
    stars: "Karthi Arvind Swamy Indumathy Manikandan",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sathyam-sundaram-et00413111-1727086916.jpg"
  },
  {
    name: "Mathu Vadalara 2",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "Babu and Yesu, former delivery agents, embark on a thrilling mission as special agents, facing extraordinary challenges with humor, surprises, and nonstop excitement.",
    stars: "Faria Abdullah Ajay Raja Chembolu",
    poster: ""
  },
  {
    name: "Premalu",
    genre: "comedy",
    OTT: "Jio Hotstar / Aha",
    synopsis: "Sachin's quest for love takes unexpected turns, creating a laughter-filled love triangle.",
    stars: "Naslen Mamitha Baiju Sangeeth Prathap",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDytYMQcWkXsVy-sv5zpT5sbCRCC81XurfA&s"
  },
  {
    name: "Bhoothaddam Bhaskar Narayana",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "In a small town in southern India, a rash of unsolved murders over the past 18 years has left the region shrouded in mystery. Despite repeated efforts, local police have failed to find any explanation or suspect.",
    stars: "Shiva Kandukuri Rashi Singh Varshini Soundararajan",
    poster: ""
  },
  {
    name: "Vettaiyan",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Ruthless criminal activity is met with force from a maverick police officer with a disregard for the rules as he confronts an outbreak of lawlessness.",
    stars: "Rajinikanth Amitabh Bachchan Fahadh Faasil",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhE7tfAtK6tzpruR7Ci3OhRah6EUdYA6VTg&s"
  },
  {
    name: "KA",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "In a village where the sun sinks below the horizon by 3 PM, darkness creeps in early, bringing with it a chilling wave of inexplicable horrors.",
    stars: "Kiran Abbavaram Ajay Annapoorna",
    poster: ""
  },
  {
    name: "Bhaje Vaayu Vegam",
    genre: "action",
    OTT: "Netflix",
    synopsis: "To pay for surgery for his father, an aspiring cricketer makes a big bet. When the bookie cheats him, he retaliates - and gets caught in a thriller web.",
    stars: "Tanikella Bharani Krishna Chaitanya Keshav Deepak",
    poster: ""
  },
  {
    name: "Aarambham",
    genre: "drama",
    OTT: "ETV Win",
    synopsis: "Prisoner no 299 escapes from Kalaghati jail leaving no clues behind. However, two detectives hired by the police department investigated the case and found something unbelievable.",
    stars: "Mohan Bhagat Bhooshan Abhishek Boddepalli",
    poster: ""
  },
  {
    name: "Lover",
    genre: "romance",
    OTT: "Jio Hotstar",
    synopsis: "Arun and Divya's six-year relationship starts unraveling as they drift apart, raising the question of whether love can withstand such differences.",
    stars: "Manikandan K.Sri Gouri Priya Harini Sundararajan",
    poster: "https://m.media-amazon.com/images/M/MV5BMDU1YzljYzUtZjhjMS00YzNiLThjOGMtOWRlNTk2YjA4YjM2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Prasanna Vadanam",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "Centers on a man with prosopagnosia who struggles to recognize faces. When caught up in a thriller scene, his condition becomes an extraordinary investigative tool.",
    stars: "Viva Harsha Rashi Singh Nandu Nithin Prasanna",
    poster: ""
  },
  {
    name: "Sundaram Master",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "An English teacher finds a remote Indian village where residents already speak English well.",
    stars: "Chaitu Babu Bhadram Brahmanandam",
    poster: ""
  },
  {
    name: "Ambajipeta Marriage Band",
    genre: "action",
    OTT: "Aha",
    synopsis: "In a small village during the early 2000s, happy twins Mallikarjuna and Padmavati find their lives changing on their 25th birthday.",
    stars: "Suhas Shivani Nagaram Gayatri Bhargavi",
    poster: ""
  },
  {
    name: "Pani",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "When the peaceful married life of a couple is unexpectedly disrupted by two youngsters with criminal inclination, the trials and tribulations connect the mobster lives of Thrissur by becoming a part of vengeance.",
    stars: "Joju George Sagar Surya Junaiz VP",
    poster: ""
  },
  {
    name: "AAY",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "When a man comes home between covid lockdowns, he connects with old friends and falls for a woman who feels influenced by her caste, while finding love.",
    stars: "Nayan Sarika Mime Gopi Narne Nithiin",
    poster: ""
  },
  {
    name: "Ooru Peru Bhairavakona",
    genre: "horror",
    OTT: "Zee5",
    synopsis: "A man goes in search of some urgently required answers to the world of Bhairavakona, from which there's seemingly no way out.",
    stars: "Sundeep Kishan Varsha Bollamma Kavya Thapar",
    poster: ""
  },
  {
    name: "BhamaKalapam 2",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "A wealthy hotelier disrupts Anupama's life. In retaliation, she puts together an imperfectly perfect team to pull off an elaborate heist at his luxurious hotel during a culinary competition.",
    stars: "Priyamani Saranya Pradeep Nanda Gopal",
    poster: ""
  },
  {
    name: "BhamaKalapam",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "A wealthy hotelier disrupts Anupama's life. In retaliation, she puts together an imperfectly perfect team to pull off an elaborate heist at his luxurious hotel during a culinary competition.",
    stars: "Priyamani Saranya Pradeep Nanda Gopal",
    poster: ""
  },
  {
    name: "Saindhav",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "The protagonist, with a past, has to cross paths with the underworld if he has to save his daughter from a health crisis and time is running out.",
    stars: "Andrea Jeremiah Nawazuddin Siddiqui Venkatesh Daggubati",
    poster: ""
  },
  {
    name: "90's - A Middle Class Biopic",
    genre: "series",
    OTT: "ETV Win",
    synopsis: "A nostalgic trip down memory lane, delving into the everyday life of a middle-class family.",
    stars: "Mouli Tanuj Prasanth Sivaji Vasanthika",
    poster: ""
  },
  {
    name: "Vikkatakavi",
    genre: "series",
    OTT: "Zee5",
    synopsis: "1970s Amaragiri residents suffer a memory-robbing plague. Detective Rama Krishna investigates the mysterious affliction but risks falling victim himself.",
    stars: "Megha Akash Naresh Agastya Rasha Kirmani",
    poster: ""
  },
  {
    name: "Paruvu",
    genre: "series",
    OTT: "Zee5",
    synopsis: "A young couple from warring castes defies societal norms by eloping and marrying. Disowned, they're forced back to their town due to a death, only to face a sinister plan to eliminate them.",
    stars: "Bindu Chandramouli Nivetha Pethuraj Naresh Agastya",
    poster: ""
  },
  {
    name: "Virupaksha",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "When a man visits his ancestral village, where terror reigns after a chain of unexplained deaths, he must unravel mystical secrets before it's too late.",
    stars: "Sai Dharam Tej Samyuktha Menon Sunil",
    poster: ""
  },
  {
    name: "Mad",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "Set in an engineering college and revolves around the antics of the students there, primarily the boys, who get a kick out of torturing the hostel warden.",
    stars: "Anthony Ravi Anthony Raghu Babu",
    poster: "https://m.media-amazon.com/images/M/MV5BMTBiNDVkOWQtMGZhMC00MDA0LWI4ZjUtMWE3YjRmMDc3NzBjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Balagam",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Balagam is set in a village in Telangana and it revolves around the after effects on a family and its relations, both with the village folks and among themselves, after the jovial patriarch of the family suddenly passes away.",
    stars: "Priyadarshi Pulikonda Kavya Kalyanram Kethiri Sudhakar Reddy",
    poster: ""
  },
  {
    name: "12th Fail",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "The real-life story of IPS Officer Manoj Kumar Sharma and IRS Officer Shraddha Joshi.",
    stars: "Vikrant Massey Medha Shankr Anant Joshi",
    poster: ""
  },
  {
    name: "Hi Nanna",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "A single father begins to narrate the story of the missing mother to his child and events take a turn when a stranger crosses their path.",
    stars: "Nani Mrunal Thakur Kiara Khanna",
    poster: ""
  },
  {
    name: "Baby",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A situational love story between childhood sweethearts and the twist and turns their life takes when they enter college.",
    stars: "Anand Deverakonda Vaishnavi Chaitanya Viraj Ashwin",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA4ZDY3MjUtNjJkNS00MzU4LTg4MTAtNWUxZTIyOTA5MTgzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Miss Shetty Mr Polishetty",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "Miss Shetty, a feminist who lives in London and wants to be single forever. Mr Polishetty, from Hyderabad in Telangana, who is in a committed relationship. How they meet and what happens in their lives.",
    stars: "Anushka Shetty Naveen Polishetty Jayasudha",
    poster: ""
  },
  {
    name: "2018",
    genre: "drama",
    OTT: "SonyLIV",
    synopsis: "A disaster film set during the 2018 Kerala Floods where people from all walks of life faced catastrophic consequences and put in collective efforts to survive the calamity.",
    stars: "Tovino Thomas, Kunchacko Boban, Asif Ali",
    poster: ""
  },
  {
    name: "Month of Madhu",
    genre: "drama",
    OTT: "Aha",
    synopsis: "Madhu, a middle-aged alcoholic who is going through a divorce, meets a young girl named Madhumathi, who has recently moved to India from the US. Their unexpected meeting leads to a series of events that change their lives.",
    stars: "Naveen Chandra Swathi Reddy Shreya Navile",
    poster: ""
  },
  {
    name: "Writer Padmabhushan",
    genre: "drama",
    OTT: "Zee5",
    synopsis: "Padmabhushan, a 25-year-old aspiring writer based out of Vijayawada and his family's journey.",
    stars: "Suhas Tina Shilparaj Rohini",
    poster: ""
  },
  {
    name: "Sir",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "The life of a young man and his struggles against the privatization of education.",
    stars: "Dhanush Samyuktha Menon Samuthirakani",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWF_dI9dXnmpZPXWgIZJKMXQLnc8iNAwYtQ&s"
  },
  {
    name: "Husharu",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Four childhood friends who share a great bond find themselves in a series of funny situations.",
    stars: "Tejus Kancherla Tej Kurapati Abhinav Medishetti",
    poster: "https://m.media-amazon.com/images/M/MV5BMjQyNjQwZTUtMjJmYy00MWNlLWJkZjYtM2JmMzAxZWMxZTk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Polimera 2",
    genre: "horror",
    OTT: "Aha",
    synopsis: "A series of mysterious deaths in a village lead to a search for the truth, revealing dark secrets and mystical events.",
    stars: "Satyam Rajesh Kamakshi Bhaskarla Baladitya",
    poster: "https://m.media-amazon.com/images/M/MV5BZmIyMWU5MDgtZmQ1MC00YzEwLTkxOGYtZmM0M2NhNWYyMDdjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Mem Famous",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A story about three friends in a village who want to become famous and the funny incidents that follow.",
    stars: "Sumanth Prabhas Mani Aegurla Mourya Nalagatla",
    poster: ""
  },
  {
    name: "Good Night",
    genre: "romance",
    OTT: "Jio Hotstar",
    synopsis: "A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl. Follow how the couple overcome his sleeping problem while living together.",
    stars: "Sree Arthi, Manikandan K.Jagan Krishnan",
    poster: ""
  },
  {
    name: "Sapta Sagaralu Daati Side B",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "10 years later, Manu gets released from jail and starts to build his life again. However, the memories of Priya haunt him and he is forced to enter her life again. A new life with Surabhi and memories of Priya along with it form plot.",
    stars: "Rakshit Shetty, Rukmini Vasanth, Chaithra J. Achar",
    poster: "https://m.media-amazon.com/images/M/MV5BYjYyOTRkYTItNDNjMi00YmNiLTk4NzAtYTY1MGQ3N2M0NzYwXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Sapta Sagaralu Daati Side A",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "10 years later, Manu gets released from jail and starts to build his life again. However, the memories of Priya haunt him and he is forced to enter her life again. A new life with Surabhi and memories of Priya along with it form plot.",
    stars: "Rakshit Shetty, Rukmini Vasanth, Chaithra J. Achar",
    poster: "https://telugustop.com/wp-content/uploads/2023/09/Sapta-Saagaradaache-Ello-0.jpg"
  },
  {
    name: "Samajavaragamana",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "Balu, a middle-class young man, falls in love with a girl and the funny situations that arise in their families.",
    stars: "Sree Vishnu Reba Monica John Naresh",
    poster: ""
  },
  {
    name: "Bedurulanka 2012",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "The people of a village called Bedurulanka are panicked by the rumors of the end of the world in 2012.",
    stars: "Kartikeya Gummakonda Neha Shetty Ajay Ghosh",
    poster: ""
  },
  {
    name: "Martin Luther King",
    genre: "drama",
    OTT: "SonyLIV",
    synopsis: "A village man's vote becomes crucial in a local election, leading to funny and thought-provoking situations.",
    stars: "Sampath Raj Sharanya Pradeep Venkatesh Maha",
    poster: ""
  },
  {
    name: "Custody",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A police constable must protect a witness from powerful people and bring him to court.",
    stars: "Naga Chaitanya Akkineni Krithi Shetty Arvind Swamy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82vTlAMdjgL4WmFpd-kmXBXOalIGMN0jCdA&s"
  },
  {
    name: "Michael",
    genre: "action",
    OTT: "Aha",
    synopsis: "A young man's journey in the criminal underworld and his quest for love and vengeance.",
    stars: "Sundeep Kishan Vijay Sethupathi Divyansha Kaushik",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/michael-et00342919-1674473933.jpg"
  },
  {
    name: "Keedaa Cola",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "A group of people find a cockroach in a soft drink bottled decide to sue the company for money, leading to chaos.",
    stars: "Chaitanya Rao Rag Mayur Brahmanandam",
    poster: ""
  },
  {
    name: "Kotabommali PS",
    genre: "action",
    OTT: "Aha",
    synopsis: "Three police officers find themselves on the run after being framed for a crime they didn't commit.",
    stars: "Srikanth Meka Rahul Vijay Shivani Rajasekhar",
    poster: "https://m.media-amazon.com/images/M/MV5BZDNiOWUyZjgtMGU3Zi00NzZjLThkOWMtMGVjNzkxOGRmNTViXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Butta Bomma",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "A simple village girl's life changes after she receives a wrong call, leading to a series of unexpected events.",
    stars: "Anikha Surendran Arjun Das Surya Vashistta",
    poster: ""
  },
  {
    name: "Phalana Abbayi Phalana Ammayi",
    genre: "romance",
    OTT: "Prime Video / Sun NXT",
    synopsis: "The journey of a couple across different stages of their life, from their first meeting in college.",
    stars: "Naga Shaurya Malvika Nair Srinivas Avasarala",
    poster: ""
  },
  {
    name: "Pareshan",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A story about a group of friends in a small town and the chaos that ensues in their lives.",
    stars: "Thiruveer Pavani Karanam Bunny Abiran",
    poster: "https://m.media-amazon.com/images/M/MV5BYzc2ODNkZjEtNzBmYi00YWJhLWIzYTMtNWNkZGJhZTYxN2YxXkEyXkFqcGc@._V1_QL75_UY281_CR16,0,190,281_.jpg"
  },
  {
    name: "Dhootha",
    genre: "series",
    OTT: "Prime Video",
    synopsis: "Objects start predicting the future and a journalist finds himself in a mysterious situation.",
    stars: "Naga Chaitanya Akkineni Parvathy Thiruvothu Priya Bhavani Shankar",
    poster: ""
  },
  {
    name: "Save the Tigers",
    genre: "series",
    OTT: "Jio Hotstar",
    synopsis: "Three frustrated husbands meet and decide to take a stand against their wives, leading to chaos.",
    stars: "Priyadarshi Pulikonda Abhinav Gomatam Chaitanya Krishna",
    poster: "https://m.media-amazon.com/images/M/MV5BMzM0MThkOGItNzI2YS00ZTNkLWI0MjQtNzlhOGM5NzFjNjlhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Anger Tales",
    genre: "series",
    OTT: "Jio Hotstar",
    synopsis: "An anthology series exploring the theme of anger through different stories.",
    stars: "Venkatesh Maha Madonna Sebastian Bindu Madhavi",
    poster: ""
  },
  {
    name: "Hostel Days",
    genre: "series",
    OTT: "Prime Video",
    synopsis: "Follows the journey of 6 engineering students as they navigate through their lives in the first year of an engineering hostel.",
    stars: "Anannyaa Akulaa Aishwarya Hollakal Akshay Lagusani",
    poster: ""
  },
  {
    name: "Major",
    genre: "action",
    OTT: "Netflix",
    synopsis: "Based on the life of Major Sandeep Unnikrishnan, who fought during the November 2008 Mumbai attacks.",
    stars: "Adivi Sesh Prakash Raj Revathi",
    poster: ""
  },
  {
    name: "Sita Ramam",
    genre: "romance",
    OTT: "Prime Video / Jio Hotstar",
    synopsis: "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir, he sends a letter to Sita which won't reach her.",
    stars: "Dulquer Salmaan Mrunal Thakur Rashmika Mandanna",
    poster: ""
  },
  {
    name: "Ustaad",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Surya, a young aimless man navigates through his life, learning lessons from his 'Ustaad' as he comes of age and becomes a pilot.",
    stars: "Gautham Vasudev Menon, Ravindra Vijay, Venkatesh Maha",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-et00364987-1690958662.jpg"
  },
  {
    name: "DJ Tillu",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "A lazy young man's life takes a turn when he gets involved in a crime and must find a way to clear his name.",
    stars: "Sidhu Jonnalagadda Neha Shetty Prince Cecil",
    poster: ""
  },
  {
    name: "HIT: The 2nd Case",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "A cool cop investigates a ritualistic serial killer who is targeting young women in Visakhapatnam.",
    stars: "Adivi Sesh Meenaakshi Chaudhary Rao Ramesh",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/e6c5e59d8d4451ee6037b78a8a268c4e330bcad09bbc0567b5350b568fd32967.jpg"
  },
  {
    name: "777 Charlie",
    genre: "drama",
    OTT: "Prime Video / JioCinema",
    synopsis: "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective.",
    stars: "Rakshit Shetty Charlie Sangeetha Sringeri",
    poster: ""
  },
  {
    name: "Oke Oka Jeevitham",
    genre: "drama",
    OTT: "SonyLIV",
    synopsis: "Three friends travel back in time to fix their past and change their lives for the better.",
    stars: "Sharwanand Amala Akkineni Ritu Varma",
    poster: "https://m.media-amazon.com/images/M/MV5BYjc4MzNlOWItNmZkMi00MmVjLTg0ZDQtMzEzNTBkNDhiZWYzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Odela Railway Station",
    genre: "horror",
    OTT: "Aha",
    synopsis: "In A Village Called Odela, There Is A Ritual Of Killing In A Row. Who Is Behind This? How Did IPS Officer Anudeep Hit These?",
    stars: "Hebah Patel, Vasishta N. Simha, Sai Ronak",
    poster: ""
  },
  {
    name: "Jayamma Panchayathi",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Jayamma deals with issues in her village apart from performing her duties as a protective homemaker who cares for her family's well-being. When her family status turns upside down, will the town help her?",
    stars: "Suma Kanakala, Shalini Kondepudi, Dinesh Kumar",
    poster: ""
  },
  {
    name: "Ori Devuda",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "A young man is given a second chance by God to fix his marriage and find true love.",
    stars: "Vishwak Sen Mithila Palkar Asha Bhat",
    poster: ""
  },
  {
    name: "Ashoka Vanamlo Arjuna Kalyanam",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A middle-aged man faces pressure from his family to get married and finds himself in a series of funny situations.",
    stars: "Vishwak Sen Ritika Nayak Rukshar Dhillon",
    poster: ""
  },
  {
    name: "Ante Sundaraniki",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "A Brahmin man and a Christian woman fall in love and create a series of lies to convince their parents.",
    stars: "Nani Nazriya Nazim Naresh",
    poster: "https://m.media-amazon.com/images/M/MV5BNDdlMjAzNjEtMmM1MC00NWY0LThhZDYtOGY5YWUyYWRiNmNkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "18 Pages",
    genre: "romance",
    OTT: "Netflix / Aha",
    synopsis: "A heartbroken man finds a diary belonging to a mysterious girl and falls in love with her through her writings.",
    stars: "Nikhil Siddhartha Anupama Parameswaran Ajay",
    poster: ""
  },
  {
    name: "Masooda",
    genre: "horror",
    OTT: "Aha",
    synopsis: "A single mother and her neighbor try to save her daughter from an evil spirit that has possessed her.",
    stars: "Sangitha Thiruveer Kavya Kalyanram",
    poster: ""
  },
  {
    name: "Virata Parvam",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A young woman falls in love with a revolutionary poet and joins the naxalite movement in the 1990s.",
    stars: "Rana Daggubati Sai Pallavi Priyamani",
    poster: ""
  },
  {
    name: "Swathi Muthyam",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "An innocent young man's life takes a turn after an unexpected incident occurs on his wedding day.",
    stars: "Ganesh Bellamkonda Varsha Bollamma Rao Ramesh",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/5c4f1e62823cd373b34aa4e56565fa93ce86951694095080c009d06d301da5ca.jpg"
  },
  {
    name: "Konda Polam",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A young man from a shepherd family must overcome his fears and protect his flock from predators in the forest.",
    stars: "Panja Vaisshnav Tej Rakul Preet Singh Sai Chand",
    poster: ""
  },
  {
    name: "Skylab",
    genre: "drama",
    OTT: "Zee5",
    synopsis: "In 1979, the residents of a small village in Telangana panic over the news that NASA's Skylab space station might crash on them.",
    stars: "Satyadev Kancharana Nithya Menen Rahul Ramakrishna",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Skylab_2021_poster.jpg"
  },
  {
    name: "Mishan Impossible",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "Three young boys set out on a mission to capture a notorious criminal and claim the reward money.",
    stars: "Taapsee Pannu Harsh Roshan Bhannu Prakasha",
    poster: "https://m.media-amazon.com/images/M/MV5BYmZiZTdiZWMtZDBhOS00Y2RhLWEzNWEtNDhjYzgzZGE5NGUwXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg"
  },
  {
    name: "Gully Rowdy",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "A young man is forced to become a rowdy by his family and gets involved in a series of funny situations.",
    stars: "Sundeep Kishan Neha Shetty Rajendra Prasad",
    poster: ""
  },
  {
    name: "Sridevi Soda Center",
    genre: "romance",
    OTT: "Zee5",
    synopsis: "A lighting technician falls in love with a girl from a different caste and must face several obstacles to be with her.",
    stars: "Sudheer Babu Anandhi Pavel Navageethan",
    poster: ""
  },
  {
    name: "Paagal",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "A young man who has lost his mother seeks love from every woman he meets, leading to a series of funny incidents.",
    stars: "Vishwak Sen Nivetha Pethuraj Simran Choudhary",
    poster: ""
  },
  {
    name: "SR Kalyanamandapam",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A young man returns to his village to fix his father's marriage hall and mend his relationship with him.",
    stars: "Kiran Abbavaram Priyanka Jawalkar Sai Kumar",
    poster: "https://bingeddata.s3.amazonaws.com/uploads/2023/04/sr-kalyanamandapam.jpg"
  },
  {
    name: "Raja Raja Chora",
    genre: "comedy",
    OTT: "Zee5",
    synopsis: "A small-time thief gets involved in a series of unexpected events after he decides to change his ways for love.",
    stars: "Sree Vishnu Sunaina Meenaakshi Chaudhary",
    poster: ""
  },
  {
    name: "Love Story",
    genre: "romance",
    OTT: "Aha",
    synopsis: "Two young people from different backgrounds come to the city to pursue their dreams and find love amidst several challenges.",
    stars: "Naga Chaitanya Akkineni Sai Pallavi Rajeev Kanakala",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/44/Love_Story_Poster.jpeg"
  },
  {
    name: "First Day First Show",
    genre: "comedy",
    OTT: "Aha",
    synopsis: "A young fan goes through several hilarious hurdles to get tickets for the first day first show of his favorite actor's movie.",
    stars: "Srikanth Reddy Sanchita Bashu Vennela Kishore",
    poster: ""
  },
  {
    name: "Narappa",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A conflict between Dalits and Kamma landlords which is based on the Karamchedu massacre, that happened in 1985.",
    stars: "Venkatesh Daggubati Priyamani Rajeev Kanakala",
    poster: ""
  },
  {
    name: "Naandhi",
    genre: "drama",
    OTT: "Aha",
    synopsis: "Revolving around undertrial prisoners who languish in jails while awaiting a judgement, the movie follows Surya Prakash who gets caught in a similar situation while being on trial for the murder of a powerful man.",
    stars: "Allari Naresh Varalaxmi Sarathkumar Harish Uthaman",
    poster: ""
  },
  {
    name: "Jai Bhim",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
    stars: "Suriya Lijo Mol Jose Manikandan K.",
    poster: ""
  },
  {
    name: "Drushyam 2",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Secrets from the past are brought to light due to an unexpected turn of events, leading to a high-stakes investigation.",
    stars: "Venkatesh Daggubati Meena Kruthika Jayakumar",
    poster: ""
  },
  {
    name: "Jathi Ratnalu",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Three friends from a small town arrive in Hyderabad in search of jobs, only to find themselves entangled in a high-profile crime case.",
    stars: "Naveen Polishetty Priyadarshi Pulikonda Rahul Ramakrishna",
    poster: ""
  },
  {
    name: "Republic",
    genre: "drama",
    OTT: "Zee5",
    synopsis: "An IAS officer challenges the corrupt political and administrative system to bring justice to the people.",
    stars: "Sai Dharam Tej Aishwarya Rajesh Ramya Krishnan",
    poster: "https://m.media-amazon.com/images/M/MV5BZWU3MGVjYjQtYTkyOS00MzcyLWIwZGUtNzdhMTU1MTQ2ZTFiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Zombie Reddy",
    genre: "horror",
    OTT: "Aha",
    synopsis: "A virus outbreak leads to a zombie apocalypse in a village, where a group of people must fight to survive.",
    stars: "Teja Sajja Anandhi Daksha Nagarkar",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cd/Zombie_Reddy.jpg"
  },
  {
    name: "Cinema Bandi",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "An auto-driver finds an expensive camera and decides to make a movie with the help of his fellow villagers.",
    stars: "Vikas Vasistha Sandeep Varanasi Rag Mayur",
    poster: ""
  },
  {
    name: "Check",
    genre: "action",
    OTT: "Sun NXT",
    synopsis: "A death row prisoner learns the game of chess to find a way to prove his innocence and escape his fate.",
    stars: "Nithiin Rakul Preet Singh Priya Prakash Varrier",
    poster: ""
  },
  {
    name: "Chaavu Kaburu Challaga",
    genre: "drama",
    OTT: "Aha",
    synopsis: "A driver of a mortuary van falls in love with a widow and must face the disapproval of society.",
    stars: "Kartikeya Gummakonda Lavanya Tripathi Murali Sharma",
    poster: ""
  },
  {
    name: "Ek Mini Katha",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A young man struggles with a personal medical condition and the psychological impact it has on his life and relationships.",
    stars: "Santosh Sobhan Kavya Thapar Brahmaji",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/7142646bde9f4b2b91d5855f27f028c9cb93abde4ef06ca6ec5708f9c067ac28.jpg"
  },
  {
    name: "Maestro",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "A blind piano player becomes the only witness to a high-profile murder and must navigate a web of deceit.",
    stars: "Nithiin Tamannaah Bhatia Nabha Natesh",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/40/Maestro_2021_poster.jpg"
  },
  {
    name: "Maa Oori Polimera",
    genre: "horror",
    OTT: "Jio Hotstar",
    synopsis: "In a village plagued by black magic, a policeman sets off to seek justice for his brother's meaningless murder but discovers something unexpected.",
    stars: "Satyam Rajesh, Baladitya, Getup Srinu",
    poster: ""
  },
  {
    name: "Ninnila Ninnila",
    genre: "romance",
    OTT: "Zee5",
    synopsis: "In London, Dev, an overweight, genius chef who suffers with muscle spasms, meets Tara and love blossoms, but things take an interesting turn when he crosses paths with Maya.",
    stars: "Ashok Selvan, Ritu Varma, Nithya Menen",
    poster: ""
  },
  {
    name: "Sarpatta Parambarai",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "When Sarpatta Parambarai is challenged to a do-or-die match, will Kabilan, a young labourer, put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics?",
    stars: "Arya, Pasupathy, John Kokken",
    poster: ""
  },
  {
    name: "Minnal Murali",
    genre: "action",
    OTT: "Netflix",
    synopsis: "A tailor gains special powers after being struck by lightning, but must take down an unexpected foe if he is to become the superhero his hometown needs.",
    stars: "Tovino Thomas, Guru Somasundaram, Aju Varghese",
    poster: ""
  },
  {
    name: "Sreekaram",
    genre: "drama",
    OTT: "Aha / Sun NXT",
    synopsis: "A young IT professional abandons his city career to revive farming in his village near Tirupati. As he strives to transform agriculture, a devoted colleague pursues his heart, while he pursues his dream of empowering farmers.",
    stars: "Sharwanand, Priyanka Arulmohan, Rao Ramesh",
    poster: ""
  },
  {
    name: "Colour Photo",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A tragic-comedy that is set in the 90s between two different personalities coming from different backgrounds that change their lives in a tale of love.",
    stars: "Suhas Chandini Chowdary Sunil",
    poster: ""
  },
  {
    name: "Uma Maheswara Ugra Roopasya",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "After getting beaten up and insulted by the town bully, a softhearted simpleton Mahesh vows to be barefoot until he gets his revenge.",
    stars: "Satyadev Kancharana V.K. Naresh Suhas",
    poster: ""
  },
  {
    name: "Aakashame ni haddu ra",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A determined villager challenges the aviation industry's elite by pursuing his vision of affordable air travel for all, despite numerous obstacles and setbacks.",
    stars: "Suriya Aparna Balamurali Paresh Rawal",
    poster: "https://c.saavncdn.com/114/Aakaasam-Nee-Haddhu-Ra-Telugu-2020-20201111104315-500x500.jpg"
  },
  {
    name: "HIT: The 1st Case",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "A police officer in the Homicide Intervention Team (HIT) has to overcome his past trauma to solve the case of a missing girl.",
    stars: "Vishwak Sen Ruhani Sharma Murli Sharma",
    poster: "https://m.media-amazon.com/images/M/MV5BZjg5M2ExZjEtN2I3Ni00ODU5LThmMDUtNWQ5MGQ0MzZmMWQ1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Middle Class Melodies",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A young man from a village dreams of starting a hotel in the city and his struggle to achieve his dream.",
    stars: "Anand Deverakonda Varsha Bollamma Goparaju Ramana",
    poster: ""
  },
  {
    name: "Andhaghaaram",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "A blind conjurer, a depressed cricketer, and a psychiatrist find their lives interconnected in a supernatural mystery.",
    stars: "Vinoth Kishan Arjun Das Pooja Ramachandran",
    poster: ""
  },
  {
    name: "Palasa 1978",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A story about two brothers in a village who get involved in a conflict between two powerful groups in the late 1970s.",
    stars: "Rakshith Thirmala Devi Raghu Kunche",
    poster: ""
  },
  {
    name: "Bhanumathi Ramakrishna",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A urban woman and a rural man fall in love and the film explores the beauty of their relationship.",
    stars: "Naveen Chandra Salony Luthra Raja Chembolu",
    poster: "https://m.media-amazon.com/images/M/MV5BZjkwM2QwODAtZDQ4NS00ZjAzLTgyMTktODBhNTdlMmQ0MmM1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Anaganaga O Athidhi",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "A mysterious stranger arrives at a poor family's house and offers them a chance to change their lives, but it comes with a dark price.",
    stars: "Payal Rajput Chaitanya Krishna V.K. Naresh",
    poster: ""
  },
  {
    name: "O Pitta Katha",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Two men fall deeply in love with the same woman but when she suddenly gets kidnapped they get involved in the case to rescue her.",
    stars: "Nitya Shetty Viswant Duddumpudi Sanjay Rrao",
    poster: "https://m.media-amazon.com/images/M/MV5BZWFjZjdhNGItYWQ4OS00NDc1LWJlMzgtNmU3ZTM3MzgwMzdiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Krishna and His Leela",
    genre: "romance",
    OTT: "Netflix / Aha",
    synopsis: "Torn between his past and present girlfriends, a confused bachelor's indecisiveness spins a web of lies and cheating as he struggles to commit.",
    stars: "Sidhu Jonnalagadda Shraddha Srinath Seerat Kapoor",
    poster: ""
  },
  {
    name: "Agent Sai Srinivasa Athreya",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Agent Sai Srinivasa Athreya is an authentic humorous investigative thriller revolving around the adventures of a detective based out of Nellore.",
    stars: "Naveen Polishetty Shruti Sharma Krishneswara Rao",
    poster: ""
  },
  {
    name: "Evaru",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Sub-inspector Vikram Vasudev is entrusted with the task of investigating the murder of a high ranking officer who was killed by his alleged rape victim. When he delves deeper into the case he uncovers some surprising facts.",
    stars: "Adivi Sesh Regena Cassandrra Naveen Chandra",
    poster: ""
  },
  {
    name: "Rakshasudu",
    genre: "thriller",
    OTT: "Sun NXT",
    synopsis: "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen girls and murders them brutally.",
    stars: "Sai Srinivas Bellamkonda Anupama Parameswaran Saravanan",
    poster: ""
  },
  {
    name: "Majili",
    genre: "romance",
    OTT: "Jio Hotstar",
    synopsis: "A former cricket player who is dealing with the heartbreak of losing his first love and his journey towards finding love again.",
    stars: "Naga Chaitanya Akkineni Samantha Ruth Prabhu Divyansha Kaushik",
    poster: ""
  },
  {
    name: "Brochevarevarura",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Three friends who are continuous failures in their exams get involved in a kidnapping case that changes their lives.",
    stars: "Sree Vishnu Nivetha Thomas Nivetha Pethuraj",
    poster: ""
  },
  {
    name: "Mathu Vadalara",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Babu is a delivery boy who is tired of his job and decides to quit, but he gets involved in a series of unexpected events.",
    stars: "Sri Simha Koduri Satya Naresh Agastya",
    poster: ""
  },
  {
    name: "F2: Fun and Frustration",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Two men who are frustrated with their wives decide to run away to escape their marital problems.",
    stars: "Venkatesh Daggubati Varun Tej Tamannaah Bhatia",
    poster: ""
  },
  {
    name: "Oh Baby",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "A 70-year-old woman magically transforms into her 24-year-old self and gets a second chance at life.",
    stars: "Samantha Ruth Prabhu Lakshmi Rao Ramesh",
    poster: ""
  },
  {
    name: "Dear Comrade",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "A student leader falls in love with a state-level cricketer and how they overcome various obstacles together.",
    stars: "Vijay Deverakonda Rashmika Mandanna Shruti Ramachandran",
    poster: ""
  },
  {
    name: "118",
    genre: "thriller",
    OTT: "Sun NXT",
    synopsis: "An investigative journalist follows a recurring dream that leads him to a mysterious case involving a missing girl.",
    stars: "Nandamuri Kalyan Ram Shalini Pandey Nivetha Thomas",
    poster: ""
  },
  {
    name: "George Reddy",
    genre: "action",
    OTT: "Aha",
    synopsis: "The life story of George Reddy, a student leader and a boxer from Osmania University who fought for social justice.",
    stars: "Sandeep Madhav Abhay Bethiganti Satyadev Kancharana",
    poster: ""
  },
  {
    name: "Khaidi",
    genre: "action",
    OTT: "Jio Hotstar",
    synopsis: "A convict on parole is forced to help the police in a dangerous situation to save several officers.",
    stars: "Karthi Narain Arjun Das",
    poster: "https://static.toiimg.com/photo/71599713.cms"
  },
  {
    name: "Kalki",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "An investigative police officer is sent to a small town to solve a series of mysterious incidents.",
    stars: "Rajasekhar Adah Sharma Rahul Ramakrishna",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d8/Kalki_film_poster.jpg"
  },
  {
    name: "Kousalya Krishnamurthy",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Kousalya Murugesan, the daughter of a farmer, aspires to become an international cricketer to put a smile on her father's face.",
    stars: "Mahesh Achanta Jhansi Vennela Kishore",
    poster: "https://m.media-amazon.com/images/M/MV5BMDE2Nzk2MGUtYTZiZi00ZmZmLWE1ZjQtMDZmZWY3NDdhOGUyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Guna 369",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "Guna is a happy-go-lucky guy who believes in compromise. But he is forced to the extremes when someone close to him is threatened.",
    stars: "Ch Chandrakanth Kartikeya Gummakonda Anagha L.K.",
    poster: ""
  },
  {
    name: "Ninnu Veedani Needanu Nene",
    genre: "horror",
    OTT: "Prime Video",
    synopsis: "Ninu Veedani Needanu Nene is about a young man who gets mired in a dire situation and comes out successfully.",
    stars: "Sundeep Kishan Anya Singh Vennela Kishore",
    poster: ""
  },
  {
    name: "Abhimanyudu",
    genre: "action",
    OTT: "Zee5",
    synopsis: "A soldier takes on a gang of cyber criminals when money goes missing from his account.",
    stars: "Vishal Samantha Ruth Prabhu Arjun Sarja",
    poster: "https://m.media-amazon.com/images/M/MV5BMWUwMTgxZDctMmQ5Yi00NjRmLTk5YjQtNTEzMWE0NWUxOWQwXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Goodachari",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A young NSA agent is framed for the murder of his colleagues and must go on the run to find the real killers and clear his name.",
    stars: "Adivi Sesh Sobhita Dhulipala Jagapathi Babu",
    poster: ""
  },
  {
    name: "U Turn",
    genre: "horror",
    OTT: "Netflix / Zee5",
    synopsis: "A young journalist investigates the mysterious deaths of people who take a U-turn on a flyover and uncovers a supernatural secret.",
    stars: "Samantha Ruth Prabhu Aadhi Rahul Ravindran",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/44/U_Turn_%282018%29.jpg"
  },
  {
    name: "Eee Nagaraniki Emaindi",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "Four childhood friends who share a great bond find themselves in a series of funny situations when they decide to make a film together.",
    stars: "Vishwak Sen Sai Sushanth Reddy Abhinav Gomatam",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/742ce82b8515d078b43550a3bf5eb28847a9f166a29e3d1260773496362aca45.jpg"
  },
  {
    name: "Bhaagamathie",
    genre: "horror",
    OTT: "Sun NXT",
    synopsis: "An IAS officer is imprisoned in a haunted house and gets possessed by a spirit who seeks vengeance against a corrupt politician.",
    stars: "Anushka Shetty Jayaram Unni Mukundan",
    poster: ""
  },
  {
    name: "Awe!",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "An anthology film that follows the lives of several individuals and how their paths cross in a mysterious cafe.",
    stars: "Kajal Aggarwal Nithya Menen Eesha Rebba",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/81/Awe_film_poster.jpg"
  },
  {
    name: "Sammohanam",
    genre: "romance",
    OTT: "Jio Hotstar",
    synopsis: "A young illustrator who dislikes the film industry falls in love with a popular actress and how they navigate their relationship.",
    stars: "Sudheer Babu Aditi Rao Hydari Naresh",
    poster: ""
  },
  {
    name: "C/o Kancharapalem",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A film that explores four different love stories involving people from different age groups and backgrounds in the small town of Kancharapalem.",
    stars: "Subba Rao Radha Bessey Kesava Karri",
    poster: ""
  },
  {
    name: "Kirrak Party",
    genre: "comedy",
    OTT: "Sun NXT",
    synopsis: "A young college student's journey from being an irresponsible youngster to a mature individual and his life in college.",
    stars: "Nikhil Siddhartha Simran Pareenja Samyuktha Hegde",
    poster: ""
  },
  {
    name: "Bluff Master",
    genre: "action",
    OTT: "Jio Hotstar / Sun NXT",
    synopsis: "A con artist who believes that money is the ultimate power in the world and his journey from being a con artist to a responsible individual.",
    stars: "Satyadev Kancharana Nandita Swetha Aditya Menon",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/2b460422b13dbb2fcc19d07c2b9cbffca00d7c7d754bd0a5f7b3435be8f2ddb2.jpg"
  },
  {
    name: "Mental Madhilo",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A confused young man who finds it difficult to make choices in life falls in love with two different women.",
    stars: "Sree Vishnu Nivetha Pethuraj Amrutha Srinivasan",
    poster: "https://bingeddata.s3.amazonaws.com/uploads/2020/05/Mental-Madhilo-Streaming-On-Aha-Video-App.jpg"
  },
  {
    name: "Okka Kshanam",
    genre: "thriller",
    OTT: "Jio Hotstar / Sun NXT",
    synopsis: "A young man discovers that his life is following the same pattern as a couple who lived in the past and he has to change the future to save his girlfriend.",
    stars: "Allu Sirish Surbhi Seerat Kapoor",
    poster: "https://m.media-amazon.com/images/M/MV5BZGM4MzE5MGQtMjFhNy00Nzc4LTljNTktNTgwNWE4ZjdhOGVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Chalo",
    genre: "comedy",
    OTT: "Sun NXT",
    synopsis: "A young man from a village where two groups are constantly at war falls in love with a girl from the rival group.",
    stars: "Naga Shaurya Rashmika Mandanna Achyuth Kumar",
    poster: "https://xstreamcp-assets-msp.streamready.in/assets/SUNNXT/MOVIE/661fb6a22219bd445f94c413/images/1000x1500_Chalo_72213_c4e9ef0b-f8f6-4df4-aaf0-b8d0c6f0569a.jpg"
  },
  {
    name: "Paper Boy",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "A young paperboy falls in love with a girl from a wealthy family and how they face the societal challenges.",
    stars: "Santosh Sobhan Riya Suman Tanya Hope",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/paper-boy-et00078088-20-06-2018-09-54-47.jpg"
  },
  {
    name: "Lover",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "Lover is a Telugu movie starring Raj Tarun and Riddhi Kumar in prominent roles. It is a romantic drama directed by Anish Krishna.",
    stars: "Raj Tarun Riddhi Kumar Ajay",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/454f47d32edbdaa009a43403325ced863fabbfbcec72e16d5c9436f020e99ba9.jpg"
  },
  {
    name: "The Ghazi Attack",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A Pakistani submarine, Ghazi plans to secretly attack Vizag port. For doing so, it has to get past Indian submarine S21.",
    stars: "Rana Daggubati Kay Kay Menon Atul Kulkarni",
    poster: ""
  },
  {
    name: "Arjun Reddy",
    genre: "romance",
    OTT: "Jio Hotstar / Prime Video",
    synopsis: "Arjun Reddy, a short-tempered house surgeon, gets used to drugs and drinks when his girlfriend is forced to marry another person.",
    stars: "Vijay Deverakonda Shalini Pandey Jia Sharma",
    poster: ""
  },
  {
    name: "Khaaki",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "Theeran, a police officer, is entrusted with the task to solve the mystery behind a series of murders. The only clue left behind is that all the murders are committed in the same pattern.",
    stars: "Karthi Rakul Preet Singh Abhimanyu Singh",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khakee-et00062706-28-09-2017-10-46-59.jpg"
  },
  {
    name: "PSV Garuda Vega",
    genre: "thriller",
    OTT: "SonyLIV",
    synopsis: "An honest NIA officer uncovers a high-profile conspiracy and goes on a dangerous mission to prevent a major disaster.",
    stars: "Rajasekhar Pooja Kumar Kishore",
    poster: ""
  },
  {
    name: "Ami Thumi",
    genre: "comedy",
    OTT: "Prime Video / Zee5",
    synopsis: "A hilarious comedy involving two couples, a strict father, and a series of misunderstandings.",
    stars: "Adivi Sesh Eesha Rebba Srinivas Avasarala",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ami-tumi-et00057491-22-05-2017-11-37-23.jpg"
  },
  {
    name: "Mister",
    genre: "romance",
    OTT: "Sun NXT",
    synopsis: "A young man falls in love with a girl in Spain and travels to India to find her, leading to a series of unexpected events.",
    stars: "Varun Tej Lavanya Tripathi Hebah Patel",
    poster: "https://m.media-amazon.com/images/M/MV5BOTIwZTM4ZDMtMGMyYi00MThmLTgwMjMtMmE1NTgyNzEwZDJmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Oxygen",
    genre: "action",
    OTT: "Jio Hotstar / Prime Video",
    synopsis: "A simple NRI man visits India for his marriage and gets involved in a battle against a dangerous criminal syndicate.",
    stars: "Gopichand Raashii Khanna Anu Emmanuel",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Oxygen_%282017%29.jpg"
  },
  {
    name: "Andhhagadu",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A visually impaired radio jockey, Gautham, falls for eye doctor Netra and begins courting her while hiding his condition.",
    stars: "Raj Tarun Hebah Patel Rajendra Prasad",
    poster: ""
  },
  {
    name: "Okkadu Migiladu",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Based on events during Srilankan civil war and Tamil refugees who were lost in sea without food and water for 10 days on their way to India.",
    stars: "Anisha Ambrose Milind Gunaji Manoj Kumar Manchu",
    poster: ""
  },
  {
    name: "Kittu Unnadu Jagratha",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "A man makes his living by kidnapping expensive dogs and hitting their owners up for ransom.",
    stars: "Raj Tarun Anu Emmanuel Arbaaz Khan",
    poster: ""
  },
  {
    name: "Meda Meeda Abbayi",
    genre: "thriller",
    OTT: "Sun NXT",
    synopsis: "An impulsive photograph taken on a train leads to a series of hilarious events in a young man's life.",
    stars: "Allari Naresh Nikhila Vimal Srinivas Avasarala",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Meda_Meeda_Abbayi.jpg"
  },
  {
    name: "Pelli Choopulu",
    genre: "romance",
    OTT: "Netflix / Aha",
    synopsis: "A wannabe businesswoman and a happy-go-lucky guy meet each other during an arranged marriage blind date but eventually team up to start a food truck on their own.",
    stars: "Abhay Bethiganti Bindu Chandramouli Khenisha Chandran",
    poster: ""
  },
  {
    name: "Oopiri",
    genre: "drama",
    OTT: "Jio Hotstar / Sun NXT",
    synopsis: "Der querschnittsgelähmte Milliardär Vikram stellt einen Häftling auf Bewährung als Pfleger ein, beeindruckt von dessen unbekümmerter Art. Es folgt ein gegenseitiger Austausch von Lebenslektionen.",
    stars: "Nagarjuna Akkineni Karthi Tamannaah Bhatia",
    poster: ""
  },
  {
    name: "Kshanam",
    genre: "action",
    OTT: "Netflix / Prime Video",
    synopsis: "Rishi arrives in India to help his ex-lover find her kidnapped daughter.",
    stars: "Adivi Sesh Adah Sharma Anasuya Bharadwaj",
    poster: ""
  },
  {
    name: "Gentleman",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "Two women, Catherine and Aishwarya, meet on a flight and share their love stories. However, Catherine begins to suspect that Aishwarya's boyfriend is the same person as hers.",
    stars: "Nani Nivetha Thomas Surabhi",
    poster: "https://m.media-amazon.com/images/M/MV5BMDc2YmJlZTctYjhiOC00NGI0LThiMmUtNmE1NDAxNzY3ZTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Premam",
    genre: "romance",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "The story of Vikram and his journey of love from his school days to his adulthood, through three different stages of his life.",
    stars: "Naga Chaitanya Akkineni Shruti Haasan Madonna Sebastian",
    poster: ""
  },
  {
    name: "Ekkadiki Pothavu Chinnavada",
    genre: "horror",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "Arjun goes to Kerala for a spiritual trip and encounters a series of supernatural events that lead him to uncover a mysterious past.",
    stars: "Nikhil Siddhartha Hebah Patel Nandita Swetha",
    poster: ""
  },
  {
    name: "Srirastu Subhamastu",
    genre: "romance",
    OTT: "Aha",
    synopsis: "A young man from a wealthy family tries to win the heart of a middle-class girl without revealing his true identity.",
    stars: "Allu Sirish Lavanya Tripathi Prakash Raj",
    poster: ""
  },
  {
    name: "Krishnagaadi Veera Prema Gaadha",
    genre: "action",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "A timid man is forced to go on a dangerous mission to save three children and win back his lover.",
    stars: "Nani Mehreen Pirzada Murli Sharma",
    poster: "https://m.media-amazon.com/images/M/MV5BYmZjNWVjNTktYTZhNC00NGE4LWI1OWUtM2NkY2JkYWVkM2Q2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Sahasam Swasaga Sagipo",
    genre: "romance",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "A young man's road trip with his friend turns into a nightmare when they get involved in a series of violent incidents.",
    stars: "Naga Chaitanya Akkineni Manjima Mohan Baba Sehgal",
    poster: "https://m.media-amazon.com/images/M/MV5BNTFlZTg4OWYtOWVhZS00MDE2LThjZTEtMGE4YjViNmIzMmRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Appatlo Okadundevadu",
    genre: "action",
    OTT: "Prime Video / Zee5",
    synopsis: "The rise and fall of a talented cricketer who gets involved in the world of crime and his battle against a police officer.",
    stars: "Nara Rohith Sree Vishnu Tanya Hope",
    poster: ""
  },
  {
    name: "Express Raja",
    genre: "comedy",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "A young man gets involved in a series of funny and chaotic events after his dog goes missing.",
    stars: "Sharwanand Surabhi Brahmaji",
    poster: ""
  },
  {
    name: "Eedo Rakam Aado Rakam",
    genre: "comedy",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "Two friends create a series of lies to marry the women they love, leading to a hilarious comedy of errors.",
    stars: "Vishnu Manchu Raj Tarun Sonarika Bhadoria",
    poster: "https://m.media-amazon.com/images/M/MV5BZjg1NTQ5ZmItNmNhZi00NzExLWFkYTQtZWM2Y2U3NmY4ZGVhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Manamantha",
    genre: "drama",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "An anthology film that follows the lives of four different individuals and how their paths cross in unexpected ways.",
    stars: "Mohanlal Gautami Viswant Duddumpudi",
    poster: ""
  },
  {
    name: "Majnu",
    genre: "romance",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "An assistant director falls in love with two women at different times and how he deals with his past and present.",
    stars: "Nani Anu Emmanuel Priya Shri",
    poster: ""
  },
  {
    name: "Jyo Achyutananda",
    genre: "drama",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "Achyut and Anand are two brothers who fall in love with the same girl, leading to a series of emotional events.",
    stars: "Nara Rohith Naga Shaurya Regina Cassandra",
    poster: ""
  },
  {
    name: "Malli Malli Idi Rani Roju",
    genre: "romance",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "Malli Malli Idi Rani Roju is a feel good love story which stays within your heart.",
    stars: "Sharwanand Nithya Menen Punarnavi Bhupalam",
    poster: "https://www.lyricstape.com/assets/image/movie_images/Mallimalliidhi.jpg"
  },
  {
    name: "Gopala Gopala",
    genre: "drama",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "An atheist sues god after losing his shop in an earthquake.",
    stars: "Venkatesh Daggubati Pawan Kalyan Shriya Saran",
    poster: ""
  },
  {
    name: "Bhale Bhale Magadivoy",
    genre: "comedy",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "An easily distracted scientist (Nani) goes to great lengths to make sure that his girlfriend (Lavanya Tripati) and her family members don't find out about his mental condition.",
    stars: "Nani Lavanya Tripathi Murli Sharma",
    poster: "https://m.media-amazon.com/images/M/MV5BMGIxYjgwODYtNjNlZi00ZTkwLWExY2UtZWE0MTEzMDkwYTNhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Surya vs Surya",
    genre: "romance",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "A young man with a rare genetic disorder preventing sun exposure pursues romance despite his life-threatening condition. His quest for love unfolds entirely at night as he navigates his unique circumstances.",
    stars: "Nikhil Siddharth Tridha Choudhury Madhoo",
    poster: "https://m.media-amazon.com/images/M/MV5BNzk0OTU3OTEtMWY3OC00NmY5LWEwNTAtODBiMTA1NDViNDI5XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Kumari 21F",
    genre: "romance",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "When a highly matured girl and an immature, over-possessive guy fall in love, their romantic journey leads to a series of twists and turns in their lives.",
    stars: "Raj Tarun Hebah Patel Noel Sean",
    poster: "https://m.media-amazon.com/images/M/MV5BYzJlM2NhOWUtYjlhZS00OGM5LWE5NjAtZGUyOWRlMTY3ZmRiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Yevade Subramanyam",
    genre: "drama",
    OTT: "Sun NXT",
    synopsis: "A man who is overly focused on long-term career goals is exposed to the opposite attitude in a friend who believes in living life to the fullest rather than sacrificing present joy for future success.",
    stars: "Nani Malvika Nair Vijay Deverakonda",
    poster: ""
  },
  {
    name: "Kerintha",
    genre: "romance",
    OTT: "Jio Hotstar / Sun NXT",
    synopsis: "Journey of six students through out their college life where each one has their own issues to deal with.",
    stars: "Sumanth Ashwin Anitha Chowdary Sri Divya",
    poster: ""
  },
  {
    name: "Courier Boy Kalyan",
    genre: "romance",
    OTT: "Zee5 / Jio Hotstar",
    synopsis: "A courier boy's life turn into unexpected consequences because of a courier received from a social service activist.",
    stars: "Nithiin Yami Gautam Nassar",
    poster: "https://sund-images.sunnxt.com/7445/1000x1500_9dd695ff-b018-4420-a44f-d97bf0e7a528.jpg"
  },
  {
    name: "Beeruva",
    genre: "comedy",
    OTT: "Jio Hotstar / Zee5",
    synopsis: "Sanju, a careless young man, falls head over heels in love with Swathi. He, however, gets more than he bargained for when he learns that she is the daughter of an underworld kingpin.",
    stars: "Ajay Anitha Chowdary Sundeep Kishan",
    poster: "https://c.saavncdn.com/617/Beeruva-Telugu-2014-500x500.jpg"
  },
  {
    name: "Raju Gari Gadhi",
    genre: "horror",
    OTT: "Sun NXT",
    synopsis: "There is a haunted house in Nandigama. Dead bodies of 34 people resurface in house's well over a period of time. A TV channel plans to host a reality show in that haunted house.",
    stars: "Shamna Kasim Ashwin Babu Dhanya Balakrishna",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raju-gari-gadhi-et00034952-1691141734.jpg"
  },
  {
    name: "Couple Friendly",
    genre: "romance",
    OTT: "Prime Video",
    synopsis: "a Telugu romantic drama following Siva (Santosh Sobhan), a struggling interior designer and bike-taxi driver in Chennai, and Mithra (Manasa Varanasi), a job-seeking IT graduate. When they share a rented apartment, their professional struggles and emerging romance evolve into a live-in relationship, navigating career, family pressures, and sudden dramatic obstacles",
    stars: "Santosh Sobhan Manasa Varanasi",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Couple_Friendly.jpg/250px-Couple_Friendly.jpg"
  },
  {
    name: "Psych Siddhartha",
    genre: "romance",
    OTT: "Zee5",
    synopsis: "a Telugu romantic drama focusing on Siddharth Reddy (Shree Nandu), a man spiraling after a breakup, who finds hope through a troubled woman, Shravya (Yaamini Bhaskar).",
    stars: "Nandu Yamini Bhaskar",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/psych-siddhartha-et00471446-1764912155.jpg"
  },
  {
    name: "Sri Chidambaram Garu",
    genre: "drama",
    OTT: "Aha",
    synopsis: "A desolate young man hides his identity behind a pair of sunglasses, dreaming of the day he leaves his village. But when his path crosses with a woman with strong ideals, he reevaluates his life.",
    stars: "Vamsi Tummala Sandhya Vasishta",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2KDMZ3ujC-tdyTfbbxtgRT-O65lypo4n-g&s"
  },
  {
    name: "Hey Balwanth",
    genre: "comedy",
    OTT: "Aha",
    synopsis: " is a Telugu-language comedy-drama film starring Suhas and directed by Gopi Atchara. It is a light-hearted, yet emotional, film that delves into a complex father-son relationship set against the backdrop of an unconventional business",
    stars: "Suhas Shivani Nagaram Naresh",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Hey_Balwanth.jpg/250px-Hey_Balwanth.jpg"
  },
  {
    name: "23 Iravai Moodu",
    genre: "drama",
    OTT: "Jio Hotstar / Aha",
    synopsis: "a hard-hitting social drama that interweaves three gripping narratives inspired by real-life tragedies: the 1991 Tsunduru massacre, the 1993 Chilakaluripeta bus burning incident, and the 1997 Hyderabad car bomb blast.",
    stars: "Teja Tanmai",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/23_Iravai_Moodu.jpg/250px-23_Iravai_Moodu.jpg"
  },
  {
    name: "Lokah Chapter 1: Chandra",
    genre: "action",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "a Malayalam dark fantasy superhero film focusing on Chandra (Kalyani Priyadarshan), a mysterious woman with supernatural abilities ope bengaluru.",
    stars: "Kalyani Priyadarshan Naslen Sandy Chandu Salim Kumar Arun Kurian",
    poster: "https://www.cinejosh.com/newsimg/newsmainimg/lokah-chapter-1-chandra_b_0109251112.jpg"
  },
  {
    name: "Sookshma Darshini",
    genre: "thriller",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Manuel returns with his mother to their former home in a middle-class neighbourhood. Suspicious of his intentions, Priyadarshini and her friends begin gathering clues, convinced he may be hiding something sinister.",
    stars: "Nazriya NazimBasil JosephAkhila Bhargavan",
    poster: "https://cinematrace.com/wp-content/uploads/2024/12/intelligen.jpg?w=324"
  },
  {
    name: "Tourist Family",
    genre: "drama",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A quirky Sri Lankan family seeking a fresh start in India transforms a disconnected neighborhood into a vibrant community with their infectious love and kindness.",
    stars: "M. SasikumarSimranMithun Jai Shankar",
    poster: "https://cdn.district.in/movies-assets/images/cinema/tourist-family-0d9891b0-0a1c-11f0-beef-99781bc618b4.jpg"
  },
  {
    name: "Dada",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A couple in love, accidentally become teenage parents. Unpleasant situations make them fall apart. Manikandan, left alone with his son, struggles as a single teenage father. Fate owns him, bringing Sindhu back into his life.",
    stars: "Kavin RajAparna DasBhagyaraj",
    poster: "https://resizing.flixster.com/aeBJb1M4oyq4_01vVwEGOb3-WsE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMwZGZmNTgyLTBjNWEtNDFjNS05NTY1LTBkMGEzNTNkNjRlZS5qcGc="
  },
  {
    name: "Rifle Club",
    genre: "action",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A historic rifle club faces a vengeful arms dealer's gang in the Western Ghats. Skilled hunters fight to survive and protect their legacy.",
    stars: "Anurag KashyapDileesh PothanVijayaraghavan",
    poster: "https://m.media-amazon.com/images/M/MV5BMGM2OWU1ZGUtNjhhZC00YzZlLWI3NmEtZDhmODA3ODg2ODJmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Officer on Duty",
    genre: "thriller",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A demoted police inspector investigates a counterfeit jewelry racket, becoming entangled in a dangerous web of crime that puts his life at stake.",
    stars: "Kunchacko BobanPriyamaniJagadish",
    poster: "https://m.media-amazon.com/images/M/MV5BMTgzOTUwNzUtNmQ5OS00ODQ4LWI0OWUtNzhhMGMzODcwMDYyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Ponman",
    genre: "drama",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Gold dealer Ajesh lends precious sovereigns for a village wedding, but finds himself in danger when the bride's criminal husband schemes to keep the gold and silence him forever.",
    stars: "Basil JosephSajin GopuLijo Mol Jose",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Ponman_poster.jpg/250px-Ponman_poster.jpg"
  },
  {
    name: "Kudumbasthan",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A lower-middle-class man faces mounting debts and family tensions after losing his job. With a pregnant wife and disapproving in-laws, he must overcome financial struggles and personal conflicts while trying to rebuild his life.",
    stars: "Manikandan K.Saanve MegghanaR. Sundarajan",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29338806_p_v8_aa.jpg"
  },
  {
    name: "Perusu",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Two brothers discover their dead father isn't fully gone. As they attempt a secret funeral, chaos unfolds, forcing them to confront their strained bond and their father's enduring presence.",
    stars: "Niharika NMMunishkanthRedin Kingsley",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsc0XFnz-_7UeZ9axBbDuEypioTpt4oaiiA&s"
  },
  {
    name: "Marana Mass",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "When a serial killer strikes in Kerala, local troublemaker Luke becomes the prime suspect. A fateful night bus journey connects him with a conductor and driver, leading to unexpected developments.",
    stars: "Anishma AnilkumarBasil JosephTovino Thomas",
    poster: "https://resizing.flixster.com/KGykn3oTRC85nvN6mOMncAWeyWw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMwYWY1OGU1LTE1OTEtNDU5YS05OGU5LWFmZjQ2Mzc2ZGJiYy5qcGc="
  },
  {
    name: "DD Next Level",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A sharp-witted film critic suddenly finds himself trapped inside the kind of movie he loves to ridicule.",
    stars: "SanthanamGautham Vasudev MenonK. Selvaraghavan",
    poster: "https://m.media-amazon.com/images/M/MV5BZGNkODY3ODctMzZkMy00YjJlLTllNzUtMGIxNjAyM2IwNjY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Bison: Kaalamaadan",
    genre: "action",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A young man fights to overcome violence plaguing his village and succeed as a professional kabaddi player.",
    stars: "Dhruv VikramAnupama ParameswaranAnurag Arora",
    poster: "https://m.media-amazon.com/images/M/MV5BYzYwNzI3NjctYTM5MC00NzhkLWE0NDQtODVlMGY3ODc2YWI2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Bad Girl",
    genre: "drama",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "From her journey through high school and college, then out into the wider world, Ramya's dream of finding the perfect guy is obstructed by societal mores, strict parents, unrequited love and the untrammelled chaos of her own mind.",
    stars: "Anjali SivaramanShanti PriyaHridhu Haroon",
    poster: "https://m.media-amazon.com/images/M/MV5BYzE5NGU4ZTMtZjRjZi00NzhhLTlhMjEtNmI3Mjc2YjBlY2YyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Jigris",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Jigris is an upcoming 2025 film that revolves around four friends embarking on an unexpected road trip in a rusty Maruti 800.",
    stars: "Muralidhar GoudKrishna BurugulaRam Nitin",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhdF7V-1NLt-3DtiR30MtiQoZ4WfuTuhUEA&s"
  },
  {
    name: "Tere Ishk Mein",
    genre: "romance",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Shankar and Mukti's intense love story unfolds against the backdrop of Benaras, exploring surrender and transformation through an all-consuming romance that heals, hurts and changes them.",
    stars: "DhanushKriti SanonPriyanshu Painyuli",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Tere_Ishk_Mein_poster.jpg/250px-Tere_Ishk_Mein_poster.jpg"
  },
  {
    name: "Manjummel Boys",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "A group of friends get into a daring rescue mission to save their friend from Guna Caves, a perilously deep pit from where nobody has ever been brought back.",
    stars: "Soubin ShahirSreenath BhasiBalu Varghese",
    poster: "https://m.media-amazon.com/images/M/MV5BZmQ0OGViZGUtZWMzZC00ZjU0LWE0MDItMjFlZTJmNWMzZDA0XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Aavesham",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.",
    stars: "Fahadh FaasilHipzsterMithun Jai Shankar",
    poster: "https://cdn.123telugu.com/content/wp-content/uploads/2024/05/aavesham.jpg"
  },
  {
    name: "Kishkindha Kaandam",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "Strange events unfold in a monkey-inhabited village, prompting a newlywed pair and forest officials to embark on a mission to uncover the root cause of the peculiar disturbances.",
    stars: "Asif AliVijayaraghavanAparna Balamurali",
    poster: "https://images.justwatch.com/poster/320694224/s718/kishkkindha-kandam.jpg"
  },
  {
    name: "Rekhachithram",
    genre: "thriller",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Suspended cop Vivek Gopinath rejoins after gambling scandal. Tasked with solving 40-year-old murder case with faceless victim, he seeks redemption by cracking the long-unsolved mystery.",
    stars: "Asif AliAnaswara RajanManoj K. Jayan",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjD5mGuu37n6TOTVHp1iSVrOCCE0ChW2YBA&s"
  },
  {
    name: "Sarvam Maya",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "A young Hindu priest's peaceful life is disrupted when he meets a spirit. What starts as a supernatural challenge evolves into a profound journey that tests his faith and makes him question everything he knows.",
    stars: "Nivin PaulyRiya ShibuPreity Mukhundhan",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5238e6238933179.691e9b2a5a0ed.jpg"
  },
  {
    name: "Alappuzha Gymkhana",
    genre: "comedy",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "After failing exams, students try entering college through sports quotas, picking boxing. They luck through district matches, but face uncertainty at higher competition levels.",
    stars: "NaslenLukman AvaranGanapathi",
    poster: "https://cdn.123telugu.com/content/wp-content/uploads/2025/04/Alappuzha-Gymkhana.jpg"
  },
  {
    name: "Ronth",
    genre: "thriller",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Two patrol officers face mounting tensions during a night shift as they navigate dangerous calls while confronting their strained partnership and personal demons.",
    stars: "Dileesh PothanRoshan MathewLakshmi Menon",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Ronth_Movie.jpg/250px-Ronth_Movie.jpg"
  },
  {
    name: "Pravinkoodu Shappu",
    genre: "thriller",
    OTT: "Netflix / Jio Hotstar",
    synopsis: "Follows a murder that happened inside the toddy shop and the hilarious events surrounding the investigation.",
    stars: "Soubin ShahirBasil JosephChandini Sreedharan",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Pravinkoodu_Shappu.jpg"
  },
  {
    name: "Anweshippin Kandethum",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "Revolves around two major crimes that shook kerala and the subsequent inquiry into the cases by sop.",
    stars: "Tovino ThomasVineeth Thattil DavidRahul Rajagopal",
    poster: "https://m.media-amazon.com/images/M/MV5BZTVhN2VmNTgtMjQ0ZC00OTc1LWE2ZGItMjFkYTUzMzcyMTJkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Vaazha: Biopic of a Billion Boys",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "Four friends deemed 'losers' face immense pressure from parents and society upon entering adulthood. Their emotional tale sees them embark on a journey of self-discovery and acceptance, where love ultimately triumphs over judgment.",
    stars: "Siju SunnyAmith Mohan RajeshwariJoemon Jyothir",
    poster: "https://m.media-amazon.com/images/M/MV5BZTVjOGE5MGMtZmI3Yy00YzZlLWFhNGItYmU5MDRkYjA1NTlhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Guruvayoor Ambalanadayil",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "A young man never wanted to marry because his girlfriend married someone else. Five years later, he was all set to get married. But a discovery about his bride's extended family forces him to reconsider? Will he marry her?",
    stars: "Prithviraj SukumaranBasil JosephNikhila Vimal",
    poster: "https://d1lcdpwgve0lt5.cloudfront.net/78575/public/public/system/posters/1514853/standard/Guruvayoor-Ambalanadayil-Telugu_1771233145.jpg"
  },
  {
    name: "Nunakuzhi",
    genre: "comedy",
    OTT: "Zee5",
    synopsis: "A young man caught in a web of lies and mistaken identities.",
    stars: "Basil JosephGrace AntonyManoj K. Jayan",
    poster: "https://m.media-amazon.com/images/M/MV5BOTgzOWU1NGYtZjhjOC00NTFjLWIwYTYtZWUxMzE3YTdhMTU0XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Level Cross",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "An estranged woman and an unruly man from different worlds meet at a surreal setup. Despite their differences, they discover unexpected similarities about life.",
    stars: "Asif AliAmala PaulSharafudheen",
    poster: "https://d1lcdpwgve0lt5.cloudfront.net/78575/public/public/system/posters/1535320/standard/Level-Cross-Potrait-Telugu_1770458302.jpg"
  },
  {
    name: "Play Back",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "Karthik is an investigative crime reporter from 2019, while Sujatha is from 1993. Karthik knows about her difficulties and he tries to change her future by changing the incidents from her past.",
    stars: "Dinesh TejAnanya NagallaArjun Kalyan",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b0/Play_Back_poster.jpg"
  },
  {
    name: "Mark Antony",
    genre: "comedy",
    OTT: "Prime Video",
    synopsis: "Mark, the son of gangster Antony, finds a telephone that has the ability to contact the past.",
    stars: "VishalS.J. SuryahRitu Varma",
    poster: "https://m.media-amazon.com/images/M/MV5BY2E5YTI3YWUtYjAyMy00OWIwLTllNzQtMzI5M2ViYTRjYWNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Maanaadu",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer are stuck in a time loop.",
    stars: "Silambarasan TRS.J. SuryahKalyani Priyadarshan",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c4/Maanaadu_poster.jpg"
  },
  {
    name: "Shakthi",
    genre: "action",
    OTT: "Youtube / Prime Video",
    synopsis: "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer are stuck in a time loop.",
    stars: "Silambarasan TRS.J. SuryahKalyani Priyadarshan",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/93b29bee07dcb0fd2e3485768757b6da8a27b15bb02721ea87351e263f589f5f.jpg"
  },
  {
    name: "Detective",
    genre: "thriller",
    OTT: "Jio Hotstar / Prime Video",
    synopsis: "A detective is hungry for a challenging case to investigate and the mystery of a murdered dog leads to a rival who could be the match for him.",
    stars: "Vishal Simran Prasanna",
    poster: "https://images.filmibeat.com/img/popcorn/movie_posters/detective-20170919112905-16399.jpg"
  },
  {
    name: "Mahaveerudu",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A cowardly cartoonist starts being 'controlled' by a cartoon action figure, and takes on a corrupt politician.",
    stars: "Sivakarthikeyan Aditi ShankarMysskin",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/9509baab45c3543f6d789ce9cf066f3f2e23b2dbe46efef5654645d0c94193cd.jpg"
  },
  {
    name: "Parking",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "An elderly man and a youngster who are tenants sharing two different floors of an individual house fight over a parking space.",
    stars: "Harish KalyanM.S. BhaskarIndhuja Ravichandran",
    poster: "https://m.media-amazon.com/images/M/MV5BNjEyZDZkNzAtNDJmYi00OWVhLWJiNzgtZTUyNjA5MzhkZmY4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Vicharana",
    genre: "drama",
    OTT: "Jio Hotstar / Youtube",
    synopsis: "Four labourers are tortured by the police to confess to a theft they have not committed.",
    stars: "Dinesh Samuthirakani Anandhi",
    poster: "https://m.media-amazon.com/images/M/MV5BZWMyMDA2ZTAtMmU4Mi00MTVlLThmYzYtODkzMDUwMzUxODZiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Maman",
    genre: "Prime Video / Zee5",
    OTT: "drama",
    synopsis: "An uncle and nephew navigate their strained bond and family dynamics through challenging circumstances that test their connection.",
    stars: "Kalaivani BhaskarSwasika VijayAishwarya Lekshmi",
    poster: "https://m.media-amazon.com/images/M/MV5BZWQzZTcxNGMtY2UyMi00YWEwLTkzZTUtM2I5YWNlYjhiNTkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "With Love",
    genre: "romance",
    OTT: "Netflix",
    synopsis: "Sathya reluctantly agrees to a blind date arranged by his sister and meets Monisha. They discover they attended the same school years ago. Bonding over shared memories and old crushes, they reconnect with their past and grow closer.",
    stars: "Abishan JeevinthAnaswara RajanSaravanan",
    poster: "https://m.media-amazon.com/images/M/MV5BNDgyZWIxNDgtNzI1MS00YzU4LTk3ZTEtZDIyMDdiZDU4NzNjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Sirai",
    genre: "romance",
    OTT: "Zee5",
    synopsis: "A cop escorts a prisoner during a transfer from Vellore prison to Sivagangai court, leading to unexpected interactions between them.",
    stars: "Vikram PrabhuLK Akshay KumarAnishma Anilkumar",
    poster: "https://m.media-amazon.com/images/M/MV5BY2RlYWNjZGMtMDZhNi00YmRhLWExNGQtOTQyMGUyMTQ3YjU5XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Janatha Hotel",
    genre: "drama",
    OTT: "Aha / Youtube",
    synopsis: "Faisi wants to go to UK to become a professional chef but circumstances force him to assist his grandfather in a small restaurant in Kozhikode city, changing his outlook on life forever.",
    stars: "Dulquer Salmaan Thilakan Siddique",
    poster: "https://upload.wikimedia.org/wikipedia/te/7/74/Janatha-hotel.jpg"
  },
  {
    name: "Kanulu Kanulu Dhochayante",
    genre: "romance",
    OTT: "Aha",
    synopsis: "Two wily online scammers mend their fraudulent ways after meeting the girls of their dreams - until a deceitful discovery throws their world for a loop.",
    stars: "Dulquer Salmaan RakshanRitu Varma",
    poster: "https://in.bmscdn.com/events/moviecard/ET00127469.jpg"
  },
  {
    name: "Mahaan",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "Gandhi Mahaan, a school teacher, is abandoned by his family after he decides to live a life of his own, with personal freedom.",
    stars: "Vikram Simran Dhruv Vikram",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/5503909a35da321e95abd5a5ff63e1818d9725e32035a69ff8f884f71e5496f8.jpg"
  },
  {
    name: "Hey Sinamika",
    genre: "romance",
    OTT: "Netfilx",
    synopsis: "The lives of Mouna, a weather scientist who falls in love with Yaazhan, a quirky and loving guy. What happens to their relationship after a couple of years and how things take an unexpected turn after the arrival of Malarvizhi?",
    stars: "Dulquer SalmaanAditi Rao HydariKajal Aggarwal",
    poster: "https://m.media-amazon.com/images/M/MV5BYTdkOWE3MDUtYTY0MC00NjNiLTkzNzItZTljYTBkODAzMTZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Hey Pillagada",
    genre: "romance",
    OTT: "Youtube",
    synopsis: "Siddharth often has problems with his wife Anjali owing to his short temper. Things take an unexpected turn when they get involved with a gangster.",
    stars: "Sai PallaviDulquer SalmaanVinayakan",
    poster: "https://m.media-amazon.com/images/M/MV5BMTNmYTRkZDctZGNjNy00MzIzLWIzOGQtN2I2OWUwZTk1Nzg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Solo",
    genre: "drama",
    OTT: "Sun NXT",
    synopsis: "An anthology, telling the story of four different people, each story revolving around four different elements: Earth, Fire, Wind and Water.",
    stars: "Dulquer SalmaanDhansikaSai Tamhankar",
    poster: "https://m.media-amazon.com/images/M/MV5BOGRhNTUyOTQtNTk2YS00YTQ2LTgyN2YtNjNlYzA0N2VmZDc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Super Deluxe",
    genre: "drama",
    OTT: "Aha",
    synopsis: "An unfaithful newly-wed wife, an estranged father, a priest and an angry son suddenly find themselves in the most unexpected predicaments, each poised to experience their destiny, all on one fateful day.",
    stars: "Vijay SethupathiFahadh FaasilSamantha Ruth Prabhu",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg"
  },
  {
    name: "Hridayam",
    genre: "romance",
    OTT: "Jio Hotstar",
    synopsis: "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
    stars: "Pranav MohanlalKalyani PriyadarshanDarshana Rajendran",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Hridayam.jpg/250px-Hridayam.jpg"
  },
  {
    name: "Ayalvaashi",
    genre: "drama",
    OTT: "Netflix",
    synopsis: "A petty misunderstanding changes Thajudheen and Benny's relationship from friends to foes. Thajudheen goes above and beyond to prove his innocence but ends up making things worse for his loved ones.",
    stars: "Soubin ShahirBinu PappuGokulan",
    poster: "https://m.media-amazon.com/images/M/MV5BMWM2ZjI4MTYtNzM0Ni00ZGVkLTg3NGYtZjkxOTkwZGI0MDU1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Kumbalangi Nights",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "Revolves around four brothers who share a love-hate relationship with each other. Their relationship progresses to another level when Saji, Boney, and Franky decide to help Bobby stand by his love.",
    stars: "Shane NigamSoubin ShahirFahadh Faasil",
    poster: "https://m.media-amazon.com/images/M/MV5BYzFjZmIzZDYtN2IxNS00YjJhLWI5MjYtYTY1NjBkZTBlMmZhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Romancham",
    genre: "comedy",
    OTT: "Jio Hotstar",
    synopsis: "A game of Ouija board goes hilariously wrong when seven bachelors unexpectedly invite a spirit and try to make the best out of the situation.",
    stars: "Soubin Shahir Arjun AshokanChemban Vinod Jose",
    poster: "https://www.livemint.com/lm-img/img/2023/04/03/original/Disney--Hotstar-to-stream-Malayalam-film-Romancham_1680501820185.png"
  },
  {
    name: "Demonte Colony 1",
    genre: "horror",
    OTT: "Sun NXT",
    synopsis: "Dopo aver consumato alcolici, quattro amici decidono di fare qualcosa di interessante e visitare un bungalow infestato. Tuttavia, non si rendono conto di essere tornati a casa con uno spirito maligno.",
    stars: "ArulnithiRamesh ThilakSananth",
    poster: "https://m.media-amazon.com/images/M/MV5BYjEzMzYyOWQtYWUwMy00NzNhLTg0OTEtOWFhMjFhYTRhYTk5XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Trance",
    genre: "action",
    OTT: "Prime Video / Aha",
    synopsis: "A disheartened motivational speaker gets hired by a corporate to become a preacher until his live stint on television puts him and his service under the scanner.",
    stars: "Fahadh FaasilGautham Vasudev MenonChemban Vinod Jose",
    poster: "https://m.media-amazon.com/images/M/MV5BODU4ZmQ2ZDItM2M4YS00MzFkLTgyNjktYmExZGU0YmYwNjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Churuli",
    genre: "thriller",
    OTT: "Sony Liv",
    synopsis: "Two undercover cops who go in search of a fugitive enter another dimension occupied by uncivilized residents who are crass and rude. There, the two men get stuck in an apparent time loop as inexplicable events begin to occur.",
    stars: "Chemban Vinod JoseVinay ForrtJoju George",
    poster: "https://m.media-amazon.com/images/M/MV5BZDhkMjJmYmItZGEwNy00OTBkLThjNDYtYTZmY2FiNDBjODgwXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Tumbbad",
    genre: "horror",
    OTT: "Prime Video",
    synopsis: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
    stars: "Sohum ShahJyoti MalsheAnita Date-Kelkar",
    poster: "https://m.media-amazon.com/images/M/MV5BOTY0YzY3MTMtOWQ5Yi00ODY2LThhOGMtMzFlMjhlODcxOGU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Eko",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "In misty Kaattukunnu hills, an elderly woman and her caretaker confront past memories while a hunted dog breeder named Kuriyachan eludes capture. As searchers arrive, buried secrets emerge.",
    stars: "Sandeep PradeepBiana MominSaurabh Sachdeva",
    poster: "https://m.media-amazon.com/images/M/MV5BY2UxOTM1YmEtZTc0Yy00MmIwLWEyMTYtNDIwM2NjOWNiOTdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Midnight Murders",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "Anwar is a consulting criminologist who helps the Police every now and then. When a string of serial killings happen in quick succession, he must race against time to find the one responsible.",
    stars: "Kunchacko Boban Unnimaya Prasad Sharaf U Dheen",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/8d280b24f827edc8714895f7eea08176a1d328ca289d4b713459b8633f4ce75a.jpg"
  },
  {
    name: "Jana Gana Mana",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "As a college professor's brutal murder sparks student unrest, a cop launches an investigation while a lawyer seeks justice in the the courtroom.",
    stars: "Prithviraj SukumaranSuraj VenjaramooduMamta Mohandas",
    poster: "https://m.media-amazon.com/images/M/MV5BZDg4ZGEwY2EtMmIwNy00NjZiLWI1ZDMtNGM2OWFkNDdhYzY2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Por Thozhil",
    genre: "thriller",
    OTT: "Sony Liv",
    synopsis: "A bright but faint-hearted rookie cop has to overcome his fears in order to succeed in his first case which sees him partnered with a reclusive senior officer to catch a serial killer on the loose.",
    stars: "R. SarathkumarLisha ChinnuAshok Selvan",
    poster: "https://m.media-amazon.com/images/M/MV5BZjIzYWVkMDEtYzZiZi00ZGM0LWE3YWQtYWRkNWExZmU0YzAzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "16 Every Detail Counts",
    genre: "thirller",
    OTT: "Youtube / Zee5 / Prime Video",
    synopsis: "A police officer retires after an accident during a case investigation. Years later, he is forced to relive the past as he narrates the story to his friend's son.",
    stars: "RahmanPrakash Raghavan Sharathkumar",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/8485ffab1db3f8aa49d66a7da60575b61cea9eb3717b73698b85d83c6111b5bb.jpg"
  },
  {
    name: "Captain Miller",
    genre: "action",
    OTT: "Prime Video",
    synopsis: "A man leaves and turns against the British-led Indian military after witnessing atrocity.",
    stars: "DhanushAditi BalanShivarajkumar",
    poster: "https://m.media-amazon.com/images/M/MV5BNmMyNjlhY2UtN2QxNi00MWRiLWJjZDgtMzU1ZWM2NzZkNTQ1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Malupu",
    genre: "thriller",
    OTT: "YouTube / Sun NXT",
    synopsis: "Based on a true incident from the early 2000s in Chennai, Malupu is a suspense thriller that follows four friends whose lives take a dark turn after a single night of celebration.",
    stars: "Aadhi Pinisetty, Nikki Galrani, Mithun Chakraborty, Pasupathy",
    poster: "https://images.filmibeat.com/img/popcorn/movie_posters/malupu-20141112104650-13989.jpg"
  },
  {
    name: "Bachelor",
    genre: "romance",
    OTT: "Sony LIV",
    synopsis: "A deeply flawed guy with behavioral issues and conservative background get into a live-in relationship with a hep modern girl and the problems that follow",
    stars: "Emon AlbiraDivya BharathiG.V. Prakash Kumar",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg"
  },
  {
    name: "Aindham Vedham",
    genre: "series",
    OTT: "Zee5",
    synopsis: "Whilst in Varanasi for her mother's last rites, Anu is entrusted with an ancient relic by a stranger, destined for a Tamil Nadu priest, which may unveil the secrets of the elusive Fifth Veda.",
    stars: "DhansikaDevadarshini ChetanMathew Varghese",
    poster: "https://m.media-amazon.com/images/M/MV5BNThlZjE1ZWEtZTY4Yy00MzQwLWI3NjctYjFlODk3ZGFmNzk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Forensic",
    genre: "thriller",
    OTT: "Aha",
    synopsis: "Samuel uses his forensic skills and discovers breakthroughs in a serial killing case as further victims are added to the list. Shikha teams up with Samuel and uncovers evidence that might lead to the killer's identity.",
    stars: "Tovino ThomasMamta MohandasSaiju Kurup",
    poster: "https://m.media-amazon.com/images/M/MV5BMWM1NDA5YzAtZWJjMC00ZjE3LWIyNjEtYjhlZTdjZGRhZTI4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Android Kattappa",
    genre: "drama",
    OTT: "Aha / Prime Video",
    synopsis: "Story of a conventional, conservative small town villager and his son who has to move away from home due to his profession. Their relationship gets an endearing twist when an AI humanoid enters their lives and fills in their emptiness.",
    stars: "Soubin ShahirSuraj VenjaramooduKendy Zirdo",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/80253b25ba56da338a7ff15bcc72b63d7e3e3462ac141fd1643d9f06914c6253.png"
  },
  {
    name: "Anekudu",
    genre: "romance",
    OTT: "Youtube / Prime Video",
    synopsis: "Madhu, an animator, gets thoughts about her past life, but her psychiatrist believes it to be a figment of her imagination. Madhu happens to meet Ashwin, the man she was in love with in her past life.",
    stars: "Dhanush Karthik Amyra Dastur",
    poster: "https://survi.in/wp-content/uploads/2015/03/ANekudu-Movie-Review-600x975.jpg"
  },
  {
    name: "Family Drama",
    genre: "drama",
    OTT: "Aha / Sony Liv",
    synopsis: "Una familia disfuncional, un asesino en serie suelto y cuando ambos mundos se encuentran, derribo muchas vidas.",
    stars: "Suhas Teja Kasarapu Pooja Kiran Shruthi Meher",
    poster: "https://m.media-amazon.com/images/M/MV5BN2FkYzI5NWMtYTZjMy00ZjkyLThiMGItYmI4MDVmZGU2NWU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Cadaver",
    genre: "thriller",
    OTT: "Jio Hotstar / Youtube",
    synopsis: "A high profile murder baffles the cops when a prison inmate claims responsibility and promises more deaths. Will the police surgeon Bhadra crack this mystery?",
    stars: "Amala PaulRiythvika PanneerselvamMunishkanth",
    poster: "https://m.media-amazon.com/images/M/MV5BN2FjNzE3YWMtMjBmYy00NDU2LTk4ODYtMmMwZDZiYzg5ZTVkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Farhana",
    genre: "drama",
    OTT: "Sony Liv",
    synopsis: "A middle-class mother takes a call centre job due to her financial reasons, and that gives her freedom, but it leads into a web of dangers.",
    stars: "Aishwarya RajeshK. SelvaraghavanAnumol K. Manoharan",
    poster: "https://m.media-amazon.com/images/M/MV5BNDc4MDU1M2QtMjJhZC00MzcxLThhNjQtZmJhYzZhNjczYjBmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Mayuri",
    genre: "horror",
    OTT: "Sun NXT",
    synopsis: "Single mother Mayuri works for an ad agency. Things start going awry when she watches a movie based on a woman called Maya, as the story bears an uncanny resemblance to her own life.",
    stars: "Nayanatara Aari Arjun",
    poster: "https://sund-images.sunnxt.com/7739/250x375_Mayuri_7739_5c05b94c-902b-49fa-a9c6-196a1af19ead.jpg"
  },
  {
    name: "Nagaram",
    genre: "thriller",
    OTT: "Youtube / Prime Video",
    synopsis: "Four youngsters arrive in a big city and their lives become interlinked.",
    stars: "Sundeep KishanSriRegena Cassandrra",
    poster: "https://images.filmibeat.com/img/220x275/popcorn/movie_posters/nagaram-20160928141845-15395.jpg"
  },
  {
    name: "Project Z",
    genre: "thriller",
    OTT: "Youtube",
    synopsis: "Kumar (Sundeep Kishan) accidentally stumbles upon a serial killer. What is the motive behind the killing and who is the killer, is what the film is all about?",
    stars: "Sandeep Kishan Lavanya Thripati",
    poster: "https://in.bmscdn.com/events/moviecard/ET00056987.jpg"
  },
  {
    name: "Jigarthanda DoubleX",
    genre: "drama",
    OTT: "Netflix / Sun NXT",
    synopsis: "In 1975, a filmmaker agrees to collaborate on a film with a gangster who wishes to become a famous actor.",
    stars: "Raghava LawrenceS.J. SuryahNimisha Sajayan",
    poster: "https://m.media-amazon.com/images/M/MV5BZDVmMmY2NzEtNmRkNy00NDFmLTkzMmMtMjYzNzIwOTg3MjQxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Thittam Irandu (Plan B)",
    genre: "thriller",
    OTT: "Prime Video",
    synopsis: "A cop starts investigating the mysterious disappearance of her childhood friend. Can she handle the revelation that lies at the end of her inquiry?",
    stars: "Aishwarya RajeshSubash SelvamGokul Anand",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/98/Thittam_Irandu.jpg"
  },
  {
    name: "Maareesan",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "In an unusual situation , Velayudham sets out on a journey with Dhaya from Nagercoil to Tiruvannamalai-a journey that will alter both their lives in ways they never imagined. What unfolds becomes the heart of the story.",
    stars: "Vadivelu Fahadh FaasilSithara",
    poster: "https://m.media-amazon.com/images/M/MV5BMWJhNDRkYTEtOTkxNy00MzhjLThhMjMtODE3MGQxNDUxMDAwXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Thandatti",
    genre: "drama",
    OTT: "Prime Video / Sun NXT",
    synopsis: "Subramani, on the brink of retirement, defies warnings to solve the case of Selvarasu's missing grandmother. Everything goes hilariously awry when Subramani finds himself trapped in a chaotic whirlwind of trouble.",
    stars: "Ammu Abhirami Rohini Pasupathy",
    poster: "https://m.media-amazon.com/images/M/MV5BMWRlY2E2NDYtOTE4ZC00NDRjLWFkZDUtNTY1MTcyYzQ1YjY4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Thaai Kizhavi",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "Pavunuthayi is a fiercely independent, intimidating elderly woman in a rural village, known for being tough, ruthless, and blunt-especially as a moneylender whose strict enforcement of dues makes her feared by locals.",
    stars: "Radhika Sarathkumar Aruldoss Ilavarasu",
    poster: "https://resizing.flixster.com/mw0excncvvEgBJLfOCJ9ZxwaKmA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQzMTRmOTE1LTAyOTQtNDA4ZS1hZTk1LTZhOGI0MzBmODQwNC5qcGc="
  },
  {
    name: "Soppana Sundari",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "When a simple middle-class girl's family wins a car in a raffle, chaos ensues as various parties claim ownership, forcing her to navigate a darkly comedic web of financial crisis and unexpected events.",
    stars: "Lakshmi Priyaa ChandramouliNakkalites DhanamMime Gopi",
    poster: "https://m.media-amazon.com/images/M/MV5BYmFmMGI3ZGUtODEzNy00NWI5LTk5YzItOTEyZmVlZTBiMWU0XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Neru",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "Sara, a blind sculptor, seeks justice after suffering trauma. She contends with the legal system and her own resilience to find resolution.",
    stars: "Mohanlal Siddique Santhi Mayadevi",
    poster: "https://pbs.twimg.com/media/GEfO7eYbcAA-ykE.jpg"
  },
  {
    name: "Mukundan Unni Associates",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "Advocate Mukundan Unni, played by Vineeth Sreenivasan wants to be successful and leaves no stone unturned to achieve growth, prosperity, and respect. But this steadfast nature aided with an ample dose of greed comes with a cost.",
    stars: "Vineeth SreenivasanSuraj VenjaramooduAarsha Chandini Baiju",
    poster: "https://m.media-amazon.com/images/M/MV5BYjlkZWQ1ZWQtY2QyZi00ZDg3LThiOWYtNDgxZGNjY2U3ZGIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Lubber Pandhu",
    genre: "drama",
    OTT: "Jio Hotstar",
    synopsis: "Set against the rural backdrop, explores gully cricket stars Gethu and Anbu's intense rivalry. Anbu's romantic involvement with Gethu's daughter escalates the clash. Their skills and emotions are put to the ultimate test.",
    stars: "Devadarshini Chetan Dinesh Jensan Diwakar",
    poster: "https://m.media-amazon.com/images/M/MV5BNDk0NzM3ZGQtNjk5Mi00Y2I4LWIwYzUtYjA2NzJiNmQyNDdlXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Shaitaan",
    genre: "horror",
    OTT: "Netflix",
    synopsis: "A family's getaway turns terrifying when an intruder possesses the teen daughter's body, putting her at the mercy of his increasingly sinister commands.",
    stars: "Ajay Devagn Madhavan Jyotika",
    poster: "https://m.media-amazon.com/images/M/MV5BOTdlZGE5YmUtZDE1Ny00NzUzLTg2YzYtNWYyMzgyNzRiY2EzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Pariyerum Perumal",
    genre: "drama",
    OTT: "Prime Video",
    synopsis: "A law student from a lower caste begins a friendship with his classmate, a girl who belongs to a higher caste, and the men in her family start giving him trouble over this.",
    stars: "Kathir Anandhi Yogi Babu",
    poster: "https://m.media-amazon.com/images/M/MV5BN2UxODUwY2QtNTI5OC00OGIwLTllZjMtMzU1ZGIyZGVlNTExXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Lovers",
    genre: "comedy",
    OTT: "Zee5 / Sun NXT",
    synopsis: "All efforts to get a partner in life by Siddhu (Sumanth Ashwin) are thwarted by Chitra (Nanditha), who he has never seen. Siddhu falls in love with a girl, who he does not realize is the same Chitra who thwarted his previous efforts to find a partner.",
    stars: "Sumanth AshwinNandita RajTejaswi Madivada",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lovers-et00022721-24-03-2017-18-32-13.jpg"
  },
  {
    name: "Nayanam",
    genre: "series",
    OTT: "Zee5",
    synopsis: "A conflicted ophthalmologist's illegal experiments let him see into private lives. His scientific curiosity becomes an obsession, leading to death and dark secrets.",
    stars: "Varun SandeshHari MunnangiAli Reza",
    poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202512/Nayanam_poster_1_1766492121.jpg"
  },
  {
    name: "Kaala Paani",
    genre: "series",
    OTT: "Netflix",
    synopsis: "When a mysterious illness descends upon the Andaman and Nicobar Islands, a desperate fight for survival collides with a race to find a cure.",
    stars: "Sukant GoelAmey WaghArushi Sharma",
    poster: "https://tse2.mm.bing.net/th/id/OIP.s1yHWDSTJfkXviidf6lpTgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Mahabharatham",
    genre: "series",
    OTT: "Jio Hotstar",
    synopsis: "The rivalry of the Pandavas and Kauravas culminate in the Kurukshetra war in Mahabharatham, driven by the razor-sharp strategies of Krishna, the master puppeteer.",
    stars: "Arav ChowdharryNaveen JingarShafaq Naaz",
    poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/8978/768978-h"
  },
  {
    name: "The Family Man",
    genre: "series",
    OTT: "Prime Video",
    synopsis: "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
    stars: "Manoj BajpayeeSamantha Ruth PrabhuPriyamani",
    poster: "https://www.moviemeter.nl/series/images/cover/33000/33965.jpg?cb=1763746166"
  },
  {
    name: "Adolescence",
    genre: "series",
    OTT: "Netflix",
    synopsis: "When a 13-year-old is accused of the murder of a classmate, his family, therapist and the detective in charge are all left asking what really happened.",
    stars: "Stephen GrahamOwen CooperAshley Walters",
    poster: "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Gruham",
    genre: "horror",
    OTT: "Youtube",
    synopsis: "A young married couple begin to encounter several paranormal attacks, when a family moves into a neighbouring house, that is being haunted by a vengeful spirit, which leads them to perform an exorcism in order to help save the neighbours.",
    stars: "SiddharthAndrea JeremiahAnisha Victor",
    poster: "https://c8.alamy.com/comp/KRE3PG/the-house-next-door-aka-aval-aka-gruham-indian-poster-in-telugu-from-KRE3PG.jpg"
  },
  {
    name: "The Hunt for Veerappan",
    genre: "series",
    OTT: "Netflix",
    synopsis: "A poacher who conquered the jungles of South India and became the subject of the biggest manhunt of India.",
    stars: "Veerappan",
    poster: "https://tse1.mm.bing.net/th/id/OIP.SSUYISkAfdcd6r9b1w3DVQHaK4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Stephen",
    genre: "thriller",
    OTT: "Netflix",
    synopsis: "Delves into the mind of a confessed killer being evaluated by a psychiatrist on a chilling case. The psychiatrist soon finds herself entangled in a mind-twisting mystery, which begins as an evaluation but leads to eternal darkness",
    stars: "Gomathi ShankarMichael ThangaduraiSmruthi Venkat",
    poster: "https://images.justwatch.com/poster/338878511/s718/stephen-2025.jpg"
  },
  {
    name: "Curry & Cyanide: The Jolly Joseph Case",
    genre: "series",
    OTT: "Netflix",
    synopsis: "The real life case of Jolly Joseph, a lady suspected of planning the cyanide poisoning of six family members over more than ten years, including a two-year-old kid.",
    stars: "B.A. AloorC.S. ChandrikaNikhila Henry",
    poster: "https://m.media-amazon.com/images/M/MV5BYWZiZDk2M2UtY2RkOS00NDczLWJlYzUtYzUxNjcxMmUxY2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Bhoothakaalam",
    genre: "horror",
    OTT: "Sony Liv",
    synopsis: "Following the death of a family member, a mother and son experience mysterious events which distort their sense of reality and make them question their sanity.",
    stars: "Shane NigamRevathiSaiju Kurup",
    poster: "https://m.media-amazon.com/images/M/MV5BZjNmZmZmYzAtMWI2Mi00ZTdmLWE4ZTUtMzNkYmFiMzhkYjVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Live Telecast",
    genre: "series",
    OTT: "Jio Hotstar",
    synopsis: "TV show director Jenifer Matthew will do anything to win the TRP game, and a supposedly haunted house in a sleepy hill station may just be her golden ticket.",
    stars: "Sasikumar ParamasivanKajal AggarwalAnandhi",
    poster: "https://m.media-amazon.com/images/M/MV5BZDk1M2U4YjMtZjg5Zi00ZmE4LTgyY2UtZTUxODIzODA1ZWIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "November Story",
    genre: "series",
    OTT: "Jio Hotstar",
    synopsis: "A celebrated crime novelist suffering from Alzheimer's is found at a murder scene with no memory of what happened. Now, it is up to his daughter to save him.",
    stars: "Tamannaah BhatiaG.M. KumarVivek Prasanna",
    poster: "https://img.rgstatic.com/content/show/dde832d5-b86c-41df-9dc8-cfd41de16511/poster-500.jpg"
  },
  {
    name: "Oka Chinna Family Story",
    genre: "series",
    OTT: "Zee5",
    synopsis: "The story of a small middle class family and a big twist that awaits them. What's the twist? How do they sail through it? A hilarious ride awaits.",
    stars: "Meesam SureshSimran SharmaSangeeth Shobhan",
    poster: "https://m.media-amazon.com/images/M/MV5BZDM3NTBkYTktZWNjYi00NzI2LWJhOTAtNzQ4NzZmNTc3ZTE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Kudi Yedamaithe",
    genre: "series",
    OTT: "Aha",
    synopsis: "Kudi Yedamaithe revolves around Durga and Aditya, who are caught in a time loop and face a life-threatening situation.",
    stars: "Surya SrinivasNithyashriAmala Paul",
    poster: "https://tse3.mm.bing.net/th/id/OIP.mTfx7i5WPNfipu93EOQlCAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Pottel",
    genre: "drama",
    OTT: "Prime Video / Aha / Sun NXT",
    synopsis: "An underprivileged villager and a victim of caste-driven politics in his village, forced to run away with his daughter Saraswati, but returns after undergoing a spiritual reincarnation, which in turn changes how the village receives him.",
    stars: "Yuva ChandraaAnanya NagallaNoel Sean",
    poster: "https://m.media-amazon.com/images/M/MV5BMTY3MGVjMzItZmUxNi00NzE4LTllYzQtMjYwMWU4OTJkZDZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Intinti Ramayanam",
    genre: "drama",
    OTT: "Aha",
    synopsis: "Set in a backdrop against Karimnagar, Telangana, the close-knit family of Ramulu begin to doubt each other when they suddenly face a problem, and their hidden motivations and ambitions surface and create a domino effect on family members.",
    stars: "Anji Mahaboob Basha Gangavva",
    poster: "https://cdn.123telugu.com/content/wp-content/uploads/2022/11/rama.jpg"
  },
  {
    name: "sambavam adhyayam onnu",
    genre: "thriller",
    OTT: "Jio Hotstar",
    synopsis: "Three Kerala Police officers venture into a mysterious forest on the Kerala-Tamil Nadu border to find a missing officer. They encounter strange time-related phenomena, uncovering the hidden secrets of Velloorkkatt forest.",
    stars: "Neethu KrishnaAskar AliSidharth Bharathan",
    poster: "https://m.media-amazon.com/images/M/MV5BZGNmODVmOTMtYzU0OC00MGY1LWIxZTAtMTQ1NzEzYjk2ODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Drushyam",
    genre: "thriller",
    OTT: "Sun NXT",
    synopsis: "Rambabu (Venkatesh Daggubati), a cable operator, tries to protect his family from paying the price for their accidental crime.",
    stars: "Venkatesh Daggubati Meena Nadia Moidu",
    poster: "https://sund-images.sunnxt.com/7634/1000x1500_Drushyam_7634_5309c86d-4d98-46db-9daa-b8477a9364c6.jpg"
  },
  {
    name: "Youth",
    genre: "comedy",
    OTT: "Netflix",
    synopsis: "15-year-old Praveen enters adolescence determined to find true love before school ends. Through relationships and heartbreaks, he discovers love's real meaning, shaping his maturity and outlook on life.",
    stars: "Ken KarunasSuraj Venjaramoodu Devadarshini Chetan",
    poster: "https://m.media-amazon.com/images/M/MV5BNDZmZTlmNDAtZGM4MS00MmVkLWEzMjEtMmNlOWI0ZjIzYzlhXkEyXkFqcGc@._V1_.jpg"
  },
];
