<script>
  const chapters = [
    {
      number: 1,
      title: "Preparing for the Move",
      strapline: "Navigating Bureaucracy",
      excerpt:
        "Moving to Spain involves navigating a labyrinth of bureaucratic processes that can feel overwhelming at first. This chapter breaks down the essential steps required to secure your visa, establish residency, and handle other legal formalities.",
    },
    {
      number: 2,
      title: "Finding Your Dream Home",
      strapline: "From Coastal Villas to Urban",
      excerpt:
        "Finding the right home in a new country can be a challenge. This chapter guides you through the Spanish real estate market, including renting and buying properties, tips on different neighborhoods, and dealing with contracts and real estate agents.",
    },
    {
      number: 3,
      title: "Work and Career in Spain",
      strapline: "Unlocking Opportunities",
      excerpt:
        "Exploring the job market and career opportunities in Spain is crucial for your integration and success. This chapter covers how to find a job, prepare your resume, interviews, and how to adapt to the Spanish work environment.",
    },
    {
      number: 4,
      title: "Social and Cultural Integration",
      strapline: "Building Connections",
      excerpt:
        "Integrating into a new culture can be exciting and challenging. This chapter provides tips on making friends, understanding and respecting social norms, and getting involved in community activities to enrich your life experience in Spain.",
    },
    {
      number: 5,
      title: "Exploring Education and Culture",
      strapline: "Learning and Immersion",
      excerpt:
        "Education in Spain offers a wide range of opportunities, from public schools to renowned higher education institutions. This chapter covers the education system, options for learning Spanish, and cultural immersion through museums, festivals, and local events.",
    },
    {
      number: 6,
      title: "Health and Well-being in Spain",
      strapline: "Ensuring a Healthy Life",
      excerpt:
        "Understanding the Spanish healthcare system is crucial for your stay. This chapter covers everything from obtaining health insurance to accessing medical services and maintaining a healthy and balanced life in the new country.",
    },
    {
      number: 7,
      title: "Exploring the Spanish Territory",
      strapline: "Discovering Regions and Natural Wonders",
      excerpt:
        "From vibrant urban life to serene rural landscapes, exploring Spain is an ongoing adventure. This chapter guides you through the most iconic regions, highlighting must-see tourist spots, local cuisine, and travel tips within the country.",
    },
  ];

  let selectedChapterNumber = $state(1)
  let selectedChapter = $derived(chapters.find(chapter => chapter.number === selectedChapterNumber))

  function selectChapter(chapter) {
    selectedChapterNumber = chapter.number
  }
</script>

<section class="chapter-preview default-margin">
  <h2 class="mb-l">What you're getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title ={selectedChapterNumber === chapter.number}
            aria-controls={`chapter-info-${chapter.number}`}
            aria-expanded={selectedChapterNumber === chapter.number}
            onclick={() => selectChapter(chapter)}
          >
            Chapter {chapter.number}: {chapter.title}
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter.title}
      </h3>
      <p>
        {selectedChapter.excerpt}
      </p>
    </div>
  </div>
</section>

<style>
  .chapter-preview {
    padding: 80px;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
