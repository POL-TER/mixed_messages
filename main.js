/*

Quote Mad Libs

01  "When you reach the end of your rope, tie a knot in it and hang on."                                                  Author: Franklin D. Roosevelt
02  "Spread love everywhere you go. Let no one ever come to you without leaving happier."                                 Author: Mother Teresa
03  "Don't judge each day by the harvest you reap but by the seeds that you plant."                                       Author: Robert Louis Stevenson
04  "Tell me and I forget. Teach me and I remember. Involve me and I learn."                                              Author: Benjamin Franklin
05  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."  Author: Helen Keller
06  "It is during our darkest moments that we must focus to see the light."                                               Author: Aristotle
07  "Do not go where the path may lead, go instead where there is no path and leave a trail."                             Author: Ralph Waldo Emerson
08  "The greatest glory in living lies not in never falling, but in rising every time we fall."                           Author: Nelson Mandela 
09  "Many of life's failures are people who did not realize how close they were to success when they gave up."            Author: Thomas A. Edison
10  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."         Author: Dr. Seuss
11  "Mother. I crave violence."                                                                                           Author: Cats
12  "The only impossible journey is the one you never begin."                                                             Author: Tony Robbins
13  Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.                  Author: Lao-Tzu, Anne Isabella Thackeray Ritchie, maybe someone else... pronbably

*/

const msgSkeletons = {
	skel01 : {
		msg  : [ 'When you reach the end of your ', ', tie a knot in it and ', ' on.' ],
		auth : 'Franklin D. Roosevelt',
	},
	skel02 : {
		msg  : [ 'Spread ', ' everywhere you go. Let no one ever ', ' to you without leaving happier.' ],
		auth : 'Mother Teresa',
	},
	skel03 : {
		msg  : [ 'Do not judge each ', ' by the harvest you ', ', but by the seeds that you plant.' ],
		auth : 'Robert Louis Stevenson',
	},
	skel04 : {
		msg  : [ 'Tell me and ', ' forget. Teach me and I remember. ', ' me and I learn.' ],
		auth : 'Benjamin Franklin',
	},
	skel05 : {
		msg  : [ 'The best and most beautiful ', ' in the world cannot be seen or even ', ' - they must be felt with the heart.' ],
		auth : 'Helen Keller',
	},
	skel06 : {
		msg  : [ 'It is during our darkest ', ' that we must focus to ', ' the light.' ],
		auth : 'Aristotle',
	},
	skel07 : {
		msg  : [ 'Do not go where the ', ' may lead, go instead where there is no path and ', ' a trail.' ],
		auth : 'Ralph Waldo Emerson',
	},
	skel08 : {
		msg  : [ 'The greatest ', ' in living ', ' not in never falling, but in rising every time we fall.' ],
		auth : 'Nelson Mandela',
	},
	skel09 : {
		msg  : [ "Many of life's failures are ', ' who did not ', ' how close they were to success when they gave up." ],
		auth : 'Thomas A. Edison',
	},
	skel10 : {
		msg  : [ 'You have ', ' in your head. You have feet in your shoes. You can ', ' yourself any direction you choose.' ],
		auth : 'Dr. Seuss',
	},
	skel11 : {
		msg  : [ 'Mother. I ', ' ', '.' ],
		auth : 'Cats',
	},
	skel12 : {
		msg  : [ 'The only impossible ', ' is the one you never ', '.' ],
		auth : 'Tony Robbins',
	},
	skel13 : {
		msg  : [ 'Give a man a ', ', and you feed him for a day. Teach a man to fish, and you ', ' him for a lifetime.' ],
		auth : 'Lao-Tzu, Anne Isabella Thackeray Ritchie, maybe someone else...',
	},
};
