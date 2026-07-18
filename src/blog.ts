// src/content/blog.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  published: string;
  readTime: string;
  category: string;
  featured: boolean;
  tags: string[];
  content: string;
}

// Import your images
import blog1 from "./assets/MOCKUPS/WhatsApp Image 2026-07-10 at 8.39.05 AM (2).jpeg";
import blog2 from "./assets/MOCKUPS/WhatsApp Image 2026-07-10 at 8.39.05 AM (2).jpeg";
import blog3 from "./assets/MOCKUPS/WhatsApp Image 2026-07-10 at 8.39.05 AM (2).jpeg";
import blog4 from "./assets/MOCKUPS/WhatsApp Image 2026-07-10 at 8.39.05 AM (2).jpeg";

export const BLOGS: BlogPost[] = [
 {
  slug: "Heart Cardiac States: Tahreek, Tahleel, Taskeen, and Takdeer",
  title: "The Physiological Mechanics of Heart Cardiac States: Tahreek, Tahleel, Taskeen, and Takdeer",
  excerpt: "Discover how nutrition influences the heart according to Tibb-e-Af'al-ul-Qalb and why maintaining the heart's balance is considered the foundation of overall health.",
  cover: blog1,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "6 min read",
  category: "Education",
  featured: true,
  tags: ["Heart Health", "Nutrition", "Tibb-e-Af'al-ul-Qalb", "Qanoon-e-Arba", "Unani Medicine", "Medical Education"],
  content: `
    <p>According to <strong>Tibb-e-Af'al-ul-Qalb</strong> (The Physiology of the Heart), the heart is not merely an organ—it is the central engine of the entire human body. Within the principles of <strong>Qanoon-e-Mufrad Aza</strong>, the functional state of the heart determines the condition of the entire body.</p>

    <blockquote>
      "When the heart is healthy, the entire body remains healthy. When the heart becomes diseased, the whole body is affected."
    </blockquote>

    <h2>The Relationship Between Food and Bodily States</h2>
    <p>Everything we consume eventually reaches the bloodstream through the heart. The qualities of food directly influence the heart's functional state, leading to four primary physiological conditions:</p>

    <h3>1. Dryness (Khushki) and Stimulation (Tehreek)</h3>
    <ul>
      <li><strong>Mechanism:</strong> Foods promoting dryness in the heart and blood.</li>
      <li><strong>Effect:</strong> Generates stimulation throughout the body.</li>
      <li><strong>Outcome:</strong> Enhances physical activity, functional performance, and responsiveness.</li>
    </ul>

    <h3>2. Heat (Garmi) and Metabolic Breakdown (Tahleel)</h3>
    <ul>
      <li><strong>Mechanism:</strong> Foods that increase heat within the heart.</li>
      <li><strong>Effect:</strong> Accelerates <em>Tahleel</em> (metabolic breakdown).</li>
      <li><strong>Outcome:</strong> Contributes to energy expenditure and natural body cleansing by breaking down accumulated materials.</li>
    </ul>

    <h3>3. Moisture (Tari) and Calmness (Taskeen)</h3>
    <ul>
      <li><strong>Mechanism:</strong> Foods that produce moisture within the heart.</li>
      <li><strong>Effect:</strong> Creates a condition of <em>Taskeen</em> (calmness).</li>
      <li><strong>Outcome:</strong> Promotes physiological stability, relaxation, and systemic harmony.</li>
    </ul>

    <h3>4. Coldness (Sardi) and Functional Suppression (Takhdeer)</h3>
    <ul>
      <li><strong>Mechanism:</strong> Excessive consumption of foods that produce coldness.</li>
      <li><strong>Effect:</strong> Induces <em>Takhdeer</em> (functional suppression).</li>
      <li><strong>Outcome:</strong> Organs lose efficiency, leading to reduced activity and slower physiological functions.</li>
    </ul>

    <h2>Conclusion: The Path to Balanced Health</h2>
    <p>Tibb-e-Af'al-ul-Qalb defines health as the maintenance of a balanced functional state of the heart. To preserve this state:</p>
    <ul>
      <li><strong>Diet as Medicine:</strong> Daily nutrition is the most influential factor in maintaining heart balance.</li>
      <li><strong>Preventive Care:</strong> Every meal shapes the body's vital functions and overall harmony.</li>
      <li><strong>Core Principle:</strong> Proper dietary choices remain a fundamental pillar of preventive healthcare in <em>Qanoon-e-Arba</em>.</li>
    </ul>
  `
},
{
  slug: "azlati-mukhali-dry-cold-temperament-imbalance-and-medical-effects",
  title: "Azlati-Mukhali (Dry-Cold) Temperament: Excess and Its Medical Effects",
  excerpt: "Understand how foods of the Azlati-Mukhali temperament influence the body and learn how their excessive consumption leads to complex health conditions.",
  cover: blog2,
  author: "Hakeem Saadat Ali Rehat",
  published: "2026-07-18",
  readTime: "5 min read",
  category: "Medical Education",
  featured: true,
  tags: ["Tibb-e-Af'al-ul-Qalb", "Qanoon-e-Mufrad-Aza", "Mizaj", "Health Education", "Unani Medicine"],
  content: `
    <p>Foods associated with the <strong>Azlati-Mukhali (Dry-Cold)</strong> temperament possess the ability to stimulate various organs within the body. When consumed in moderation, these foods provide strength and vitality. However, their excessive or improper use can lead to serious medical complications.</p>

    <h2>The Effects of Excessive Consumption</h2>
    <p>When intake of these foods exceeds moderate levels, it induces <strong>congestion, constipation, extreme restlessness, and inflammation</strong>. This state causes the organs to contract (shrink), leading to two primary issues:</p>
    <ul>
      <li><strong>Nutritional Deficiency:</strong> Due to reduced organ volume, they fail to obtain the required nutrients and oxygen from the blood.</li>
      <li><strong>Waste Retention:</strong> The organs lose the ability to effectively expel metabolic waste (toxic waste) and carbon dioxide.</li>
    </ul>

    <h2>Medical Complications and Disorders</h2>
    <p>The accumulation of waste products disrupts various physiological systems, potentially leading to the following conditions:</p>

    <h3>1. Dermatological and Inflammatory Issues</h3>
    <p>The buildup of toxins leads to skin conditions such as itching, eczema, psoriasis, various inflammatory symptoms, and syphilitic toxicity.</p>

    <h3>2. Respiratory and Muscular Disorders</h3>
    <p>Increased stiffness in the muscles occurs, resulting in respiratory distress (such as asthma or tuberculosis) and the stiffening of joints and muscles.</p>

    <h3>3. Cardiovascular and Circulatory Health</h3>
    <p>The accumulation of gaseous and melancholic humors in the arteries can lead to elevated blood pressure and arterial blockages.</p>

    <h3>4. Systemic Diseases</h3>
    <ul>
      <li><strong>Excretory System:</strong> Development of hemorrhoids (piles), sycosis toxicity, and the formation of stones in the urinary tract or gallbladder.</li>
      <li><strong>Reproductive System:</strong> Obstruction in the production of sperm and ova (eggs).</li>
      <li><strong>Tumors/Growths:</strong> Formation of lumps, glandular swellings, and scrofulous toxicity.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The Azlati-Mukhali temperament carries profound medical implications. True health depends on balanced consumption. To maintain optimal organ function, it is essential to ensure a balance between organ volume, physiological activity, and the body's natural waste-expulsion system to prevent the onset of chronic disease.</p>
  `
},
 {
  slug: "azlati-qishri-dry-hot-temperament-imbalance-and-medical-effects",
  title: "Azlati-Qishri (Dry-Hot) Temperament: Excess and Its Medical Effects",
  excerpt: "Understand how the Azlati-Qishri temperament influences organ function and the clinical consequences of its excessive intake, including inflammation and systemic toxicity.",
  cover: blog3,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "5 min read",
  category: "Medical Education",
  featured: true,
  tags: ["Tibb-e-Af'al-ul-Qalb", "Qanoon-e-Mufrad-Aza", "Mizaj", "Health Education", "Unani Medicine"],
  content: `
    <p>Foods belonging to the <strong>Azlati-Qishri (Dry-Hot)</strong> temperament stimulate physiological activity within the body. When utilized with moderation, these foods are essential for strengthening the organs and maintaining functional vitality.</p>

    <h2>The Consequences of Excessive Intake</h2>
    <p>When consumed beyond moderate requirements, these foods induce congestion, constipation, restlessness, and acute inflammation. Unlike the shrinking effect of cold temperaments, this state causes <strong>organ volume to increase due to inflammation (swelling)</strong>, which triggers several critical failures:</p>
    <ul>
      <li><strong>Nutritional Impairment:</strong> The swelling restricts the organ's ability to absorb necessary nutrients and oxygen from the blood.</li>
      <li><strong>Toxic Accumulation:</strong> Metabolic waste and carbon dioxide cannot be expelled, leading to internal toxicity.</li>
    </ul>

    <h2>Clinical Manifestations and Pathologies</h2>
    <p>The retention of waste products due to this inflammatory state leads to a range of severe health conditions:</p>

    <h3>1. Inflammatory and Ulcerative Conditions</h3>
    <p>Excessive heat and inflammation result in pain, fever, ulcers (Qarha), and chronic sores (Nasoor), which are progressive stages of tissue irritation.</p>

    <h3>2. Dermatological and Systemic Toxicity</h3>
    <p>Toxin retention manifests as skin eruptions, including eczema, psoriasis, itching, and syphilitic toxicity.</p>

    <h3>3. Cardiovascular and Respiratory Impact</h3>
    <p>The condition causes arterial stiffness, elevated blood pressure, and respiratory distress, including asthma and tuberculosis. It further leads to the accumulation of biliary and gaseous humors, resulting in blockages in the coronary arteries.</p>

    <h3>4. Systemic and Chronic Disorders</h3>
    <ul>
      <li><strong>Excretory System:</strong> Bleeding hemorrhoids, sycosis toxicity, and the formation of calculi (stones) in the gallbladder or urinary tract.</li>
      <li><strong>Neoplastic Potential:</strong> Development of tumors, growths, and glandular swellings.</li>
      <li><strong>Chronic Inflammation:</strong> Persistent inflammatory processes (Sora) and gonorrheal toxicity.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The Azlati-Qishri temperament emphasizes the fine line between vitality and inflammatory damage. Maintaining balance is vital, as excessive stimulation causes organs to swell, lose efficiency, and become breeding grounds for chronic disease. Proper dietary regulation remains the primary defense in <em>Qanoon-e-Arba</em> to prevent such systemic failures.</p>
  `
},
{
  slug: "the-science-of-muscular-stimulation-and-khilt-e-riah",
  title: "The Science of Muscular Stimulation: Principles of Khilt-e-Riah",
  excerpt: "An in-depth look at the chemical composition of muscular tissues and the two primary states of muscular stimulation according to Qanoon-e-Mufrad Aza.",
  cover: blog4,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "6 min read",
  category: "Medical Education",
  featured: true,
  tags: ["Khilt-e-Riah", "Muscular System", "Protein", "Physiology", "Qanoon-e-Mufrad-Aza"],
  content: `
    <p>In the framework of <em>Qanoon-e-Mufrad Aza</em>, the heart and its associated muscular tissues are the engine of the body. Understanding the physiology of these tissues begins with <strong>Khilt-e-Riah</strong>, the fundamental substance that governs muscular structure and movement.</p>

    <h2>Elemental Composition of Muscular Tissue</h2>
    <p>Muscular tissue (protein) is synthesized from a specific mixture of four primary gases. The chemical breakdown of this structure is as follows:</p>
    <ul>
      <li><strong>Carbon:</strong> 54%</li>
      <li><strong>Oxygen:</strong> 22%</li>
      <li><strong>Nitrogen:</strong> 16%</li>
      <li><strong>Hydrogen:</strong> 7%</li>
      <li><strong>Sulfur:</strong> 1%</li>
      <li><strong>Phosphorus:</strong> 0.6%</li>
    </ul>

    <h2>The Dynamics of Khilt-e-Riah</h2>
    <p>This elemental mixture forms the basis of <em>Khilt-e-Riah</em>, which acts in two distinct capacities:</p>
    <ul>
      <li><strong>Density (Kathafat):</strong> Provides the material for physical muscular tissues.</li>
      <li><strong>Subtlety (Latafat):</strong> Generates <em>Rooh-e-Haywani</em> (Vital Spirit). This spirit produces <em>Quwwat-e-Haywani</em> (Vital Force), which manifests as the action of movement.</li>
    </ul>
    <p>Because of this intrinsic relationship, every muscular activity inevitably produces <em>Riah</em>.</p>

    <h2>The Two Categories of Muscular Stimulation</h2>
    <p>Muscular activity is categorized based on the secondary humor present during the stimulation:</p>

    <h3>1. Azlati-Mukhali (Dry-Cold)</h3>
    <p>This state is characterized by the presence of <strong>Khilt-e-Sauda</strong> alongside <em>Khilt-e-Riah</em>.</p>
    <ul>
      <li><strong>Pathology:</strong> Excessive stimulation leads to <em>Soozish</em> (Infection).</li>
      <li><strong>Physical Effect:</strong> Causes organs to <strong>contract and shrink</strong>.</li>
    </ul>

    <h3>2. Azlati-Qishri (Dry-Hot)</h3>
    <p>This state is characterized by the presence of <strong>Khilt-e-Safra</strong> alongside <em>Khilt-e-Riah</em>.</p>
    <ul>
      <li><strong>Pathology:</strong> Excessive stimulation leads to <em>Waram</em> (Inflammation).</li>
      <li><strong>Physical Effect:</strong> Causes organs to <strong>swell and expand</strong>.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Understanding these mechanisms is vital for accurate diagnosis and treatment. By balancing the stimulation of the muscular system, we can prevent both infectious contraction and inflammatory swelling, ensuring the body's natural physiological balance.</p>
    
    <p class="text-center italic mt-10">Subhan Allah wa bihamdihi, Subhan Allah-il-Azeem.</p>
  `
},
{
  slug: "azlati-sozish-aur-waram-kull-amraz-dietary-treatment",
  title: "Muscular Inflammation and Swelling: Modern Diseases and Dietary Treatment",
  excerpt: "Understand the causes of inflammatory diseases, ulcers, and cancer resulting from an excess of muscular foods, and learn their dietary remedies.",
  cover: blog4,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "7 min read",
  category: "Medical Education",
  featured: true,
  tags: ["Azlati-Tehreek", "Soozish", "Waram", "Qanoon-e-Mufrad-Aza", "Dietary Therapy"],
  content: `
    <p>In modern times, poor lifestyle choices and the excessive consumption of <strong>dry-cold or dry-hot muscular foods</strong> are leading to an increase in acidity within the body. This condition creates a specific type of stimulation in the heart and muscles, the negative effects of which impact the entire physiological system through the blood.</p>

    <h2>Causes of Disease: The System of Degeneration</h2>
    <p>Excessive consumption of these foods generates toxic waste during the four stages of digestion, which forms the basis of various diseases:</p>

    <ul>
      <li><strong>Digestive System (1st Digestion):</strong> Acidity in the stomach leads to inflammation, ulcers, and cancer along the alimentary canal. Waste expelled through the rectum causes irritation and hemorrhoids, known as 'Psychotic' toxicity.</li>
      <li><strong>Respiratory & Excretory Systems (2nd Digestion):</strong> Acidity reaching the lungs causes tuberculosis (TB), while acidity in the urinary tract causes inflammation and sores, known as 'Sora' (Gonorrheal toxicity).</li>
      <li><strong>Dermal System (3rd Digestion):</strong> When toxic waste is pushed from tissues toward the skin, it manifests as eruptions and boils, known as 'Syphilitic' toxicity.</li>
      <li><strong>Organic System (4th Digestion):</strong> If the body cannot expel these toxins and retains them as lumps or growths, it results in 'Scrofulous' toxicity.</li>
    </ul>

    <h2>Principle of Treatment: Resolving Constriction</h2>
    <p>The primary goal of treatment is to relieve muscular constriction and expel accumulated acidic waste. For this, <strong>Qishri-Aasabi (Hot-Moist/Resolvent)</strong> and <strong>Aasabi-Qishri (Moist-Hot/Sedative)</strong> foods and medicines are the best choices.</p>

    <h2>Dietary Chart (Treatment through Food)</h2>
    <p>For symptoms of inflammation, swelling, pain, fever, ulcers, or cancer, use the following diet:</p>

    <h3>Breakfast</h3>
    <ul>
      <li>Barley porridge cooked in milk (sweetened with honey or lightly salted).</li>
      <li>15-20 peeled almonds and 3-5 white figs, followed by milk infused with fennel and green cardamom.</li>
      <li>A paste made of butter and crushed peeled almonds is highly beneficial.</li>
    </ul>

    <h3>Lunch & Dinner</h3>
    <p>Cook radish, carrots, turnips, apple gourd (Tinda), bottle gourd (Ghiya), or split green gram (Moong dal) with ginger, garlic, turmeric, and white cumin. Serve with bread and follow with the aforementioned fennel-cardamom milk.</p>

    <h3>Fruits</h3>
    <p>Musk melon (Garma/Sarda), apricots, cantaloupe, and papaya are excellent in this condition.</p>

    <div class="mt-10 text-center italic">
      <p>Subhan Allah wa bihamdihi, Subhan Allah-il-Azeem.</p>
      <p>— Hakeem Saadat Ali Rahat (SOPMS)</p>
    </div>
  `
},
{
  slug: "the-heart-as-the-determinant-of-nutritional-temperament",
  title: "The Heart: The Central Determinant of Nutritional Temperament",
  excerpt: "Discover how the heart regulates the temperament of every food and medicine, and how it dictates the physiological state of the entire body.",
  cover: blog4,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "5 min read",
  category: "Medical Education",
  featured: true,
  tags: ["Heart Physiology", "Nutritional Temperament", "Tibb-e-Af'al-ul-Qalb", "Qanoon-e-Mufrad-Aza"],
  content: `
    <p>In the framework of <em>Tib-e-Mufrad Aza</em>, the heart is not merely a pump; it is the central organ responsible for determining the physiological impact of everything we consume. When food or medicine is digested and absorbed into the bloodstream, it is the heart that dictates its ultimate effect on the body's temperament.</p>

    <h2>The Heart as the Master Regulator</h2>
    <p>Every substance, once assimilated, passes through the heart. The heart processes this substance and alters the blood's chemical state, which then influences the entire body. The resulting physiological state is defined by the four primary temperaments:</p>

    <ul>
      <li><strong>Dryness (Khushki):</strong> If the substance increases dryness in the heart and blood, it induces <strong>Tehreek (Stimulation)</strong> throughout the body’s muscles and organs.</li>
      <li><strong>Heat (Garmi):</strong> If the substance increases heat in the heart and blood, it induces <strong>Tahleel (Metabolic Breakdown/Resolution)</strong>.</li>
      <li><strong>Moisture (Tari):</strong> If the substance increases moisture in the heart and blood, it induces <strong>Taskeen (Calmness/Sedation)</strong>.</li>
      <li><strong>Coldness (Sardi):</strong> If the substance increases coldness in the heart and blood, it induces <strong>Takhdeer (Numbness/Suppression)</strong>.</li>
    </ul>

    <h2>The Principle of Systemic Influence</h2>
    <p>The heart maintains systemic balance through these four states. Because the heart distributes these influences via the blood, any change in the heart's functional state inevitably manifests across all organs:</p>

    <table class="w-full text-left border-collapse mt-6">
      <thead>
        <tr class="border-b">
          <th class="py-2">Heart's Dominant State</th>
          <th class="py-2">Physiological Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="py-2 font-semibold">Dryness</td><td class="py-2">Stimulation (Tehreek)</td></tr>
        <tr><td class="py-2 font-semibold">Heat</td><td class="py-2">Metabolic Breakdown (Tahleel)</td></tr>
        <tr><td class="py-2 font-semibold">Moisture</td><td class="py-2">Calmness (Taskeen)</td></tr>
        <tr><td class="py-2 font-semibold">Coldness</td><td class="py-2">Numbness (Takhdeer)</td></tr>
      </tbody>
    </table>

    <h2>Conclusion</h2>
    <p>The heart is the primary organ that assigns a 'temperament' to our intake. By understanding this, we can utilize food as a precise tool to regulate our internal system—whether we need to stimulate sluggish organs, calm overactive systems, resolve inflammation, or suppress pathological numbness.</p>

    <div class="mt-10 text-center italic">
      <p>Subhan Allah wa bihamdihi, Subhan Allah-il-Azeem.</p>
      <p>— Hakeem Saadat Ali Rahat (SOPMS)</p>
    </div>
  `
},
{
  slug: "rahat-sopms-modern-research-common-principles-in-traditional-and-modern-medicine",
  title: "Rahat SOPMS Modern Research: The Common Ground in Traditional and Modern Medicine",
  excerpt: "A profound synthesis of Ayurveda, Unani, and Modern Histology, explaining how the four tissues of modern science align with the four humors of ancient medicine.",
  cover: blog1,
  author: "Hakeem Saadat Ali Rahat",
  published: "2026-07-18",
  readTime: "8 min read",
  category: "Medical Research",
  featured: true,
  tags: ["Rahat-SOPMS", "Histology", "Qanoon-e-Arba", "Ayurveda", "Unani", "Integrative Medicine"],
  content: `
    <p>In this era of scientific inquiry, a unifying truth emerges: the wisdom of ancient medicine (Ayurveda and Unani) and the discoveries of modern medical science are not contradictory—they are two ways of observing the same biological reality.</p>

    <h2>The Histological Foundation</h2>
    <p>Modern science identifies four types of tissues (Histology), while ancient medicine identifies four types of humors (Akhlaat/Doshas). Our research at <em>Rahat SOPMS</em> demonstrates that these are inherently linked:</p>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-200 mt-4">
        <thead class="bg-primary/5">
          <tr>
            <th class="p-2 border">Modern Tissue Type</th>
            <th class="p-2 border">Ancient Humor (Akhlaat)</th>
            <th class="p-2 border">Primary Organ (Center)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="p-2 border">Nervous Tissues</td><td class="p-2 border">Balgham (Phlegm/Kaf)</td><td class="p-2 border">Brain</td></tr>
          <tr><td class="p-2 border">Epithelial Tissues</td><td class="p-2 border">Safra (Bile/Pitt)</td><td class="p-2 border">Liver</td></tr>
          <tr><td class="p-2 border">Connective Tissues</td><td class="p-2 border">Sauda (Mucous/Am)</td><td class="p-2 border">Spleen</td></tr>
          <tr><td class="p-2 border">Muscular Tissues</td><td class="p-2 border">Riah (Gas/Vat)</td><td class="p-2 border">Heart</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Synthesis of Principles</h2>
    <p>Every substance—whether it is food, medicine, or poison—possesses properties that specifically interact with these four types of tissues. </p>
    <ul>
      <li><strong>Physical Structure:</strong> Organs and tissues are formed from the <em>dense</em> (Kathafat) components of humors.</li>
      <li><strong>Vital Force:</strong> <em>Rooh</em> (Vital Spirit) is generated from the <em>subtle</em> (Latafat) components of these humors, providing the force required for cellular movement and function.</li>
      <li><strong>Pathology:</strong> When fermentation occurs within the humors specific to these tissues, it creates the environment for specific pathogens to thrive.</li>
    </ul>

    <h2>Conclusion: A Universal Law</h2>
    <p>Whether we speak of the three Doshas of Ayurveda (with the addition of Blood) or the four Akhlaat of Unani, the fundamental truth remains: <strong>All therapeutic agents interact specifically with these four tissue types.</strong> Recognizing this allows for a precise, scientific approach to nutrition and medication, where we treat the specific tissue at its source organ.</p>

    <div class="mt-10 text-center italic">
      <p>Subhan Allah wa bihamdihi, Subhan Allah-il-Azeem.</p>
      <p>— Hakeem Saadat Ali Rahat (SOPMS)</p>
    </div>
  `
},
];