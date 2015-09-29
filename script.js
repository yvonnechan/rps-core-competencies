

// JavaScript Document

var app = angular.module('BonMod', []);

app.controller('PlanningGuideCtrl', function($scope, $http, FetchStandards) {
	
	
	FetchStandards.list(function(lit){
		$scope.core = lit;
	});
});
app.factory('FetchStandards', function($http){
	return{
		list: function(callback){
			$http.get('standards.json').success(callback);
		}
	}
	
});
/*	
	$scope.reading =  
	[
			{
			'heading': 'Key Ideas and Details',
			'text':'1. Read closely to determine what the text says explicitly and to make logical inferences from it; cite specific textual evidence when writing or speaking to support conclusions drawn from text.',
			'details': ['Pre-read, skimming the text features (e.g., introductions, headings and sub-headings, illustrations, graphics, symbols, lists, definitions of key terms).', 
			'Read actively, annotating the text for main ideas and key details; mark places that spark confusion, questions, or wonder.',
			'Read closely, transacting with the text by connecting it to other texts, to themselves, to other readers, and to the world beyond the text.',
			'Reread, composing visual and verbal representations of their understanding, using a variety of graphic and Analyze how and why individuals, events, and ideas develop and interact over the course of a text.note-taking techniques and organizers.',
			'Comprehend complex quantitative or technical information by translating between visual, mathematical and textual modes (e.g., create tables from text, written summaries from charts).',
			'Methodically read and follow complex procedures and directions precisely when carrying out experiments, taking measurements, or performing technical tasks.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'2. Determine central ideas or themes of a text and analyze their development; summarize the key supporting details and ideas.',
			'details': ['Determine how the central ideas, themes, events, or conclusions emerge and are shaped and refined by specific details in the text.', 
			'Summarize central ideas and key events accurately and objectively.',
			'Paraphrase significant passages and complex information, quoting minimally or not at all.'],
			'details1112': ['Analyze how two or more central ideas interact and build on one another to provide a complex analysis.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'3. ',
			'details': ['Analyze in detail a series of ideas or events, including the order in they occur, how they develop, and how they are connected.', 
			'Analyze how complex characters develop, interact with others, advance the plot, or contribute to the theme.',
			'Determine whether earlier events caused later events or merely preceded them. Distinguish correlation from causation.'],	
			'details1112': ['Analyze the impact of the author\'s choices (e.g., where the story is set, how the action is sequenced, characterization) on the development of the story.',
			'Evaluate various explanations for actions or events, determining which explanation is best supported by textual evidence.',
			'Determine where the text leaves matters uncertain.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Craft and Structure',
			'text':'4. Interpret words and phrases as they are used in a text, including technical, connotative, and figurative meanings; analyze how specific word choices shape meaning and tone.',
			'details': ['Determine the meaning and connotations of domain-specific words, phrases, figures of speech, and symbols as they are used in context.', 
			'Analyze the impact of language on meaning and tone.'],
			'details1112': ['Analyze how an author uses and refines the meaning of key terms over the course of the text.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'5. Analyze the structure of texts, including how specific sentences, paragraphs, and larger portions of the text relate to each other and the whole.',
			'details': ['Analyze in detail how the ideas and concepts in a text are developed, refined, emphasized, or connected by particular sentences, paragraphs, or sections of a text (e.g., a section, chapter, scene, stanza, image, graphic, or audio-video link).', 
			'Analyze an author\'s choices concerning how to structure a text (plot, pacing, flashbacks, etc.) to create such effects as mystery, tension, or surprise.',
			'Integrate information from the parts of a text (e.g., images with captions, graphics with symbols or words, maps, pull-quotes) in print or digital texts.'],
			'details1112': ['Analyze how an author uses structure (e.g., an introduction, conclusion, or resolution) to contribute to the overall meaning and aesthetic impact.',
			'Analyze and evaluate the effectiveness of the structure of an exposition or argument, and whether the structure makes points clear, convincing, and engaging.',
			'Analyze and demonstrate understanding of how the text structures information or ideas into categories or hierarchies.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'6. Assess how point of view or purpose shapes the content and style of a text.',
			'details': ['Determine an author\'s point of view or purpose by defining the question the author seeks to address or the problem the author seeks to understand and/or resolve.', 
			'Analyze how the author uses rhetoric to advance point of view or purpose.',
			'Read texts written by authors from multiple races, ethnicities, religions, ages, cultures, sexual orientations and gender identities',
			'Analyze how an author\'s identity informs and shapes the content.'],
			'details1112': ['Analyze a case in which grasping point of view requires distinguishing what is directly stated in a text from what is meant (e.g., satire, irony, sarcasm, understatement).',
			'Determine the extent to which the point of view or purpose of a text can limit or distort the content and style with false assumptions, biases, and omissions.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'7. Evaluate and synthesize content presented in diverse media and formats, including visually and quantitatively, as well as in words.',
			'details': ['Compare and contrast the representation of a subject in 2+ different media, determining what is emphasized, modified, or omitted in each.', 
			'Gather relevant content from a variety of texts.'],
			'details1112': ['Analyze, interpret, and evaluate multiple modes of a single work.',
			'Integrate multiple sources of information conveyed in diverse formats and media, including images, audio-visuals, symbols, numbers, and words, to address a question or solve a problem.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'8. Evaluate the argument and specific claims in a text, including the validity of the reasoning and the relevance and sufficiency of the evidence.',
			'details': ['Relate fiction, poetry, or drama to the ideas of its time.', 
			'Assess the extent to which the reasoning and evidence support the author\'s claim or proposed solution to a problem.',
			'Identify false statements and fallacious reasoning.'],
			'details1112': ['Analyze text through critical lenses (e.g., literary, psychological, historical, sociological, feminist).',
			'Evaluate the hypotheses, data, analysis, and conclusions in a text, verifying information when possible and corroborating or challenging conclusions.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'9. Analyze how two or more texts address similar themes or topics in order to build knowledge or to compare the approaches the authors take.',
			'details': ['Analyze how an author draws on and transforms source material.', 
			'Compare and contrast treatments of the same topic in primary and secondary sources.',
			'Compare and contrast findings in multiple sources, noting when findings support or contradict previous accounts.',
			'Compare the point of view of 2+ authors on the same or similar topics, noting which details they include, emphasize, and omit.',
			'Evaluate differing claims on the same event or issue in multiple texts by assessing the authors\' reasoning, and evidence.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Range, Complexity, and Frequency',
			'text':'10. Read and comprehend a range of complex literary and informational texts independently and proficiently.',
			'details': ['Synthesize information from a range of complex texts into a coherent understanding of a theme, event, idea, process, phenomenon, or concept, noting discrepancies and resolving conflicting information when possible.', 
			'Select appropriate texts by considering topic, relevance to academic projects, and personal interests, applying knowledge of their reading level to the selection of books when appropriate.',
			'Read self-selected books for enjoyment frequently (5-7 days a week, at least 20 minutes a day) in and out of school.',
			'Transfer knowledge learned from a range of texts to new situations and contexts.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}
	];
	$scope.writing =  
	[
			{
			'heading': 'Key Ideas and Details',
			'text':'1. Read closely to determine what the text says explicitly and to make logical inferences from it; cite specific textual evidence when writing or speaking to support conclusions drawn from text.',
			'details': ['Pre-read, skimming the text features (e.g., introductions, headings and sub-headings, illustrations, graphics, symbols, lists, definitions of key terms).', 
			'Read actively, annotating the text for main ideas and key details; mark places that spark confusion, questions, or wonder.',
			'Read closely, transacting with the text by connecting it to other texts, to themselves, to other readers, and to the world beyond the text.',
			'Reread, composing visual and verbal representations of their understanding, using a variety of graphic and note-taking techniques and organizers.',
			'Comprehend complex quantitative or technical information by translating between visual, mathematical and textual modes (e.g., create tables from text, written summaries from charts).',
			'Methodically read and follow complex procedures and directions precisely when carrying out experiments, taking measurements, or performing technical tasks.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'2. Determine central ideas or themes of a text and analyze their development; summarize the key supporting details and ideas.',
			'details': ['Determine how the central ideas, themes, events, or conclusions emerge and are shaped and refined by specific details in the text.', 
			'Summarize central ideas and key events accurately and objectively.',
			'Paraphrase significant passages and complex information, quoting minimally or not at all.'],
			'details1112': ['Analyze how two or more central ideas interact and build on one another to provide a complex analysis.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'3. Analyze how and why individuals, events, and ideas develop and interact over the course of a text.',
			'details': ['Analyze in detail a series of ideas or events, including the order in they occur, how they develop, and how they are connected.', 
			'Analyze how complex characters develop, interact with others, advance the plot, or contribute to the theme.',
			'Determine whether earlier events caused later events or merely preceded them. Distinguish correlation from causation.'],	
			'details1112': ['Analyze the impact of the author\'s choices (e.g., where the story is set, how the action is sequenced, characterization) on the development of the story.',
			'Evaluate various explanations for actions or events, determining which explanation is best supported by textual evidence.',
			'Determine where the text leaves matters uncertain.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Craft and Structure',
			'text':'4. Interpret words and phrases as they are used in a text, including technical, connotative, and figurative meanings; analyze how specific word choices shape meaning and tone.',
			'details': ['Determine the meaning and connotations of domain-specific words, phrases, figures of speech, and symbols as they are used in context.', 
			'Analyze the impact of language on meaning and tone.'],
			'details1112': ['Analyze how an author uses and refines the meaning of key terms over the course of the text.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'5. Analyze the structure of texts, including how specific sentences, paragraphs, and larger portions of the text relate to each other and the whole.',
			'details': ['Analyze in detail how the ideas and concepts in a text are developed, refined, emphasized, or connected by particular sentences, paragraphs, or sections of a text (e.g., a section, chapter, scene, stanza, image, graphic, or audio-video link).', 
			'Analyze an author\'s choices concerning how to structure a text (plot, pacing, flashbacks, etc.) to create such effects as mystery, tension, or surprise.',
			'Integrate information from the parts of a text (e.g., images with captions, graphics with symbols or words, maps, pull-quotes) in print or digital texts.'],
			'details1112': ['Analyze how an author uses structure (e.g., an introduction, conclusion, or resolution) to contribute to the overall meaning and aesthetic impact.',
			'Analyze and evaluate the effectiveness of the structure of an exposition or argument, and whether the structure makes points clear, convincing, and engaging.',
			'Analyze and demonstrate understanding of how the text structures information or ideas into categories or hierarchies.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Key Ideas and Details',
			'text':'6. Assess how point of view or purpose shapes the content and style of a text.',
			'details': ['Determine an author\'s point of view or purpose by defining the question the author seeks to address or the problem the author seeks to understand and/or resolve.', 
			'Analyze how the author uses rhetoric to advance point of view or purpose.',
			'Read texts written by authors from multiple races, ethnicities, religions, ages, cultures, sexual orientations and gender identities',
			'Analyze how an author\'s identity informs and shapes the content.'],
			'details1112': ['Analyze a case in which grasping point of view requires distinguishing what is directly stated in a text from what is meant (e.g., satire, irony, sarcasm, understatement).',
			'Determine the extent to which the point of view or purpose of a text can limit or distort the content and style with false assumptions, biases, and omissions.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'7. Evaluate and synthesize content presented in diverse media and formats, including visually and quantitatively, as well as in words.',
			'details': ['Compare and contrast the representation of a subject in 2+ different media, determining what is emphasized, modified, or omitted in each.', 
			'Gather relevant content from a variety of texts.'],
			'details1112': ['Analyze, interpret, and evaluate multiple modes of a single work.',
			'Integrate multiple sources of information conveyed in diverse formats and media, including images, audio-visuals, symbols, numbers, and words, to address a question or solve a problem.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'8. Evaluate the argument and specific claims in a text, including the validity of the reasoning and the relevance and sufficiency of the evidence.',
			'details': ['Relate fiction, poetry, or drama to the ideas of its time.', 
			'Assess the extent to which the reasoning and evidence support the author\'s claim or proposed solution to a problem.',
			'Identify false statements and fallacious reasoning.'],
			'details1112': ['Analyze text through critical lenses (e.g., literary, psychological, historical, sociological, feminist).',
			'Evaluate the hypotheses, data, analysis, and conclusions in a text, verifying information when possible and corroborating or challenging conclusions.'],
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Evaluation and Synthesis of Ideas',
			'text':'9. Analyze how two or more texts address similar themes or topics in order to build knowledge or to compare the approaches the authors take.',
			'details': ['Analyze how an author draws on and transforms source material.', 
			'Compare and contrast treatments of the same topic in primary and secondary sources.',
			'Compare and contrast findings in multiple sources, noting when findings support or contradict previous accounts.',
			'Compare the point of view of 2+ authors on the same or similar topics, noting which details they include, emphasize, and omit.',
			'Evaluate differing claims on the same event or issue in multiple texts by assessing the authors\' reasoning, and evidence.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}, {
			'heading': 'Range, Complexity, and Frequency',
			'text':'10. Read and comprehend a range of complex literary and informational texts independently and proficiently.',
			'details': ['Synthesize information from a range of complex texts into a coherent understanding of a theme, event, idea, process, phenomenon, or concept, noting discrepancies and resolving conflicting information when possible.', 
			'Select appropriate texts by considering topic, relevance to academic projects, and personal interests, applying knowledge of their reading level to the selection of books when appropriate.',
			'Read self-selected books for enjoyment frequently (5-7 days a week, at least 20 minutes a day) in and out of school.',
			'Transfer knowledge learned from a range of texts to new situations and contexts.'],
			'details1112': null,
			'proficient': 'Lorem ipsum'
    	}
	];
*/
