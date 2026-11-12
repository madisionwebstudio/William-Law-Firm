/**
 * Content for the individual service pages.
 * Each page is built from its own ordered list of blocks, so pages differ in
 * structure as well as wording. Legal statements are general Georgia information
 * and should be reviewed by the attorney before launch and whenever the law changes.
 */

type Item = { h: string; p: string; k?: string };
export type Block =
  | { type: 'prose'; bg?: string; eyebrow?: string; h: string; html: string; aside?: { h: string; html: string } }
  | { type: 'cards'; bg?: string; eyebrow?: string; h: string; intro?: string; cols?: 2 | 3; items: Item[] }
  | { type: 'ledger'; bg?: string; eyebrow?: string; h: string; intro?: string; items: Item[] }
  | { type: 'checks'; bg?: string; eyebrow?: string; h: string; intro?: string; items: string[]; note?: string }
  | { type: 'steps'; bg?: string; eyebrow?: string; h: string; intro?: string; items: Item[] };

export interface ServicePage {
  slug: string;
  parent: 'criminal-defense' | 'personal-injury';
  nav: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  mark: string;
  attorney: { heading: string; body: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string; kicker: string }[];
  cta: { heading: string; body: string };
}

export const services: ServicePage[] = [
  /* ------------------------------------------------------------------ DUI */
  {
    slug: 'dui-defense',
    parent: 'criminal-defense',
    nav: 'DUI Defense',
    title: 'DUI Lawyer in Snellville, GA | The Williams Law Firm',
    description:
      'Arrested for DUI in Snellville or Gwinnett County? You may have only 30 days to protect your license. Call attorney Iymaan Williams: 404-998-2992.',
    eyebrow: 'DUI Defense · Snellville & Gwinnett County',
    h1: 'A DUI arrest starts a clock. <em class="gold">Know your next move.</em>',
    lede: 'A Georgia DUI is two cases at once: a criminal charge in court and an administrative action against your license. The firm helps you respond to both, starting with the deadline that arrives first.',
    mark: 'DUI',
    attorney: {
      heading: 'Clear guidance from the first phone call.',
      body: 'Most people arrested for DUI have never been in a courtroom. Iymaan Williams walks you through what the paperwork means, what the court expects, and what your realistic options are.',
    },
    blocks: [
      {
        type: 'steps',
        bg: 'bg-paper',
        eyebrow: 'The first 30 days',
        h: 'Two tracks, two sets of deadlines.',
        intro:
          'If the officer took your license and gave you a DDS Form 1205, that form is both your temporary permit and your notice of suspension.',
        items: [
          {
            k: 'Within 30 days',
            h: 'Protect your license',
            p: 'You generally have 30 days from the arrest to request an administrative license suspension (ALS) hearing or, if you qualify, to apply for an ignition interlock limited permit instead. Miss the deadline and the suspension usually takes effect automatically.',
          },
          {
            k: 'First court date',
            h: 'Arraignment',
            p: 'You enter a plea. In most cases the right move at this stage is to preserve every option while your attorney obtains the evidence: reports, video and test records.',
          },
          {
            k: 'Before trial',
            h: 'Review and motions',
            p: 'Your attorney examines the stop, the field sobriety evaluations and the chemical test, and can ask the court to exclude evidence that was gathered improperly.',
          },
          {
            k: 'Resolution',
            h: 'Negotiation or trial',
            p: 'Depending on the evidence, a case may be resolved by dismissal, a reduced charge, a negotiated plea or a trial. The decision is always yours, made with full information.',
          },
        ],
      },
      {
        type: 'prose',
        bg: 'bg-ivory',
        eyebrow: 'The law',
        h: 'What Georgia has to prove.',
        html: `<p>Under O.C.G.A. § 40-6-391, the State can pursue a DUI in two ways. A <strong>“per se”</strong> case rests on a chemical test showing a blood alcohol concentration of 0.08 or more within three hours of driving (0.04 for commercial drivers, 0.02 for drivers under 21). A <strong>“less safe”</strong> case requires no number at all; the prosecution argues that alcohol or drugs made you a less safe driver.</p>
<p>DUI charges also cover prescription medication, marijuana and other drugs. A valid prescription is not automatically a defense if the State claims the medication impaired your driving.</p>
<h3>What the firm looks at</h3>
<ul>
<li><strong>The stop.</strong> Did the officer have a lawful reason to pull you over or approach your car?</li>
<li><strong>Field sobriety evaluations.</strong> Were they explained and administered the way officers are trained to give them?</li>
<li><strong>Implied consent.</strong> Was the required notice read correctly and at the right time?</li>
<li><strong>The test itself.</strong> Was the breath instrument maintained and operated properly? Was a blood sample handled and analyzed correctly?</li>
<li><strong>The video.</strong> Body camera and dash camera footage often tells a fuller story than the written report.</li>
</ul>`,
        aside: {
          h: 'Do not wait on the 30 days',
          html: '<p>The license deadline runs from the date of arrest, not from your court date. It is often the first thing the firm addresses when a new DUI client calls.</p>',
        },
      },
      {
        type: 'ledger',
        bg: 'bg-navy',
        eyebrow: 'What is at stake',
        h: 'Possible consequences of a first DUI conviction.',
        intro:
          'Penalties depend on the facts and your record, and they rise sharply for repeat offenses within ten years. For a first conviction, Georgia law provides for:',
        items: [
          { h: 'Jail', p: 'From 10 days up to 12 months. A judge may suspend or probate most of that time, but 24 hours is typically required when the BAC was 0.08 or higher.' },
          { h: 'Fine', p: 'Between $300 and $1,000, plus court surcharges that substantially increase the total.' },
          { h: 'Probation and conditions', p: 'Generally 12 months less any jail time, with community service, a DUI Risk Reduction course and a clinical evaluation.' },
          { h: 'Driver’s license', p: 'A suspension, with limited driving permits available to many first-time offenders aged 21 and over.' },
          { h: 'Your record', p: 'A DUI conviction cannot be expunged or restricted in Georgia. It can affect insurance, employment and professional licenses.' },
        ],
      },
      {
        type: 'checks',
        bg: 'bg-paper',
        eyebrow: 'What clients should know',
        h: 'Practical steps after an arrest.',
        items: [
          '<b>Keep every document</b> you were handed, especially the citation and any DDS 1205 form.',
          '<b>Write down what you remember</b> while it is fresh: where you were, what you ate and drank, what the officer said and did.',
          '<b>Do not discuss the case</b> on social media or with anyone other than your lawyer.',
          '<b>Calendar your court date</b> and do not miss it. A missed date can lead to a bench warrant and a license suspension.',
          '<b>Call a lawyer early.</b> The sooner the evidence is requested and reviewed, the more options you tend to have.',
        ],
        note: 'This page is general information about Georgia law, not legal advice for your situation.',
      },
    ],
    faqs: [
      {
        q: 'Can I still drive after a DUI arrest in Georgia?',
        a: 'Often, yes, at least temporarily. If the officer issued a DDS Form 1205, it normally serves as a temporary driving permit for a limited period. What happens next depends on whether a hearing request or ignition interlock permit application is filed within 30 days.',
      },
      {
        q: 'Should I have refused the breath test?',
        a: 'That decision has already been made, and either choice has consequences a lawyer can work with. A refusal can lead to a longer administrative suspension, but it may also leave the State without a test result. Tell your attorney exactly what happened so the right issues can be raised.',
      },
      {
        q: 'Will I go to jail for a first DUI?',
        a: 'Georgia law sets a minimum sentence, and a judge has discretion over how much of it is actually served. Outcomes vary with the facts, your record and the court. No lawyer can honestly promise a particular result, but an attorney can explain the realistic range in your case.',
      },
      {
        q: 'Which court will hear my Gwinnett County DUI?',
        a: 'It depends on where the arrest happened and who made it. Cases may begin in a municipal court such as Snellville Municipal Court or in Gwinnett County Recorder’s Court, and can be moved to Gwinnett County State Court, where jury trials are held.',
      },
    ],
    related: [
      { kicker: 'Criminal defense', label: 'Drug Charges', href: '/criminal-defense/drug-charges/' },
      { kicker: 'Criminal defense', label: 'Assault & Violent Crimes', href: '/criminal-defense/assault-violent-crimes/' },
      { kicker: 'Overview', label: 'All Criminal Defense', href: '/criminal-defense/' },
    ],
    cta: {
      heading: 'Arrested for DUI? <em class="gold">Talk it through today.</em>',
      body: 'The license deadline is short. A conversation with the firm will tell you what needs to happen first and what can wait.',
    },
  },

  /* ---------------------------------------------------------------- DRUGS */
  {
    slug: 'drug-charges',
    parent: 'criminal-defense',
    nav: 'Drug Charges',
    title: 'Drug Charges Attorney in Gwinnett County, GA | The Williams Law Firm',
    description:
      'Facing possession, intent to distribute or trafficking charges in Snellville or Gwinnett County? Attorney Iymaan Williams defends drug cases. Call 404-998-2992.',
    eyebrow: 'Drug Charges · Snellville & Gwinnett County',
    h1: 'A drug charge is an accusation. <em class="gold">It is not the end of the story.</em>',
    lede: 'Georgia treats drug offenses seriously, and most are felonies. But these cases often turn on how the police found what they found. The firm defends clients charged with possession, possession with intent to distribute and trafficking.',
    mark: 'Defense',
    attorney: {
      heading: 'Every detail of the search gets examined.',
      body: 'Iymaan Williams reviews how the stop happened, why the search was made and how the evidence was handled, then explains in plain terms what that means for your case.',
    },
    blocks: [
      {
        type: 'cards',
        bg: 'bg-paper',
        eyebrow: 'Charges the firm defends',
        h: 'Three charges, three very different cases.',
        cols: 3,
        items: [
          {
            k: 'Possession',
            h: 'Simple possession',
            p: 'Possessing a controlled substance for personal use. Under Georgia law, possession of one ounce or less of marijuana is a misdemeanor, while possession of most other controlled substances is a felony.',
          },
          {
            k: 'Intent to distribute',
            h: 'Possession with intent',
            p: 'The State does not need to prove a sale. Prosecutors often rely on circumstances such as quantity, packaging, scales or cash to argue that drugs were meant for distribution.',
          },
          {
            k: 'Trafficking',
            h: 'Trafficking',
            p: 'Charged on the basis of weight alone once statutory thresholds are met. Trafficking convictions carry mandatory minimum prison sentences and substantial fines.',
          },
        ],
      },
      {
        type: 'prose',
        bg: 'bg-ivory',
        eyebrow: 'How these cases are defended',
        h: 'The questions that decide drug cases.',
        html: `<p>Drug prosecutions are built on physical evidence, and the Constitution limits how police may obtain it. If a stop, search or seizure was unlawful, a court can exclude what was found, and without it the State may be unable to proceed.</p>
<h3>Was the stop or search lawful?</h3>
<p>Officers need a valid reason to stop a vehicle and, in most situations, a warrant, consent or a recognized exception to search. The firm examines what the officer knew at each moment, and whether any consent was truly voluntary.</p>
<h3>Can the State prove possession?</h3>
<p>Being near drugs is not the same as possessing them. When something is found in a shared car, apartment or bag, the prosecution must connect it to you specifically. Georgia law calls this the difference between actual and constructive possession.</p>
<h3>Is the substance what they say it is?</h3>
<p>The State must prove the identity and, where it matters, the weight of the substance, usually through crime lab testing. Chain of custody and lab procedures are open to challenge.</p>
<h3>Is there a path that avoids a conviction?</h3>
<p>Georgia law offers alternatives for some people, including conditional discharge for certain first-time possession offenses, the First Offender Act, and pretrial diversion or accountability court programs where available. Eligibility depends on the charge, your history and the prosecutor’s office.</p>`,
        aside: {
          h: 'If police want to talk',
          html: '<p>You can politely decline to answer questions and decline to consent to a search. Say that you would like to speak with a lawyer, then stop talking. Never resist or argue at the scene.</p>',
        },
      },
      {
        type: 'ledger',
        bg: 'bg-navy',
        eyebrow: 'Beyond the sentence',
        h: 'Consequences people do not expect.',
        intro: 'A drug conviction can follow you long after a case closes. It is one reason early advice matters.',
        items: [
          { h: 'Driver’s license', p: 'Some drug convictions can affect your driving privileges, even when no vehicle was involved.' },
          { h: 'Employment and licensing', p: 'Convictions appear on background checks and can affect professional licenses and job opportunities.' },
          { h: 'Housing and education', p: 'A record can complicate rental applications and, in some situations, student aid.' },
          { h: 'Immigration status', p: 'For non-citizens, even minor drug offenses can carry serious immigration consequences. Tell your attorney your status immediately.' },
          { h: 'Firearms', p: 'A felony conviction ends the right to possess a firearm under state and federal law.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is marijuana possession still a crime in Georgia?',
        a: 'Yes. Georgia has not legalized recreational marijuana. Possession of one ounce or less is a misdemeanor under state law, and possession of more than an ounce is a felony. Some cities have reduced local penalties, but state law still applies.',
      },
      {
        q: 'The drugs were not mine. Can I still be charged?',
        a: 'Yes. Police frequently charge everyone in a car or home where drugs are found. Being charged is different from being convicted: the State must prove that you knowingly possessed the substance, and that is often the central issue in the defense.',
      },
      {
        q: 'What is conditional discharge?',
        a: 'For certain first-time drug possession offenses, Georgia law allows a judge to place a person on probation without entering a conviction. If the terms are completed, the case is discharged and dismissed. It is not available in every case, and an attorney can tell you whether you may qualify.',
      },
      {
        q: 'Should I explain my side to the police?',
        a: 'Not without a lawyer. Statements made to “clear things up” are routinely used as evidence. You can be cooperative and respectful while still declining to answer questions until you have legal advice.',
      },
    ],
    related: [
      { kicker: 'Criminal defense', label: 'DUI Defense', href: '/criminal-defense/dui-defense/' },
      { kicker: 'Criminal defense', label: 'Assault & Violent Crimes', href: '/criminal-defense/assault-violent-crimes/' },
      { kicker: 'Overview', label: 'All Criminal Defense', href: '/criminal-defense/' },
    ],
    cta: {
      heading: 'Charged with a drug offense? <em class="gold">Get informed first.</em>',
      body: 'Before you make any decision about your case, understand the evidence and your options. Start with a conversation.',
    },
  },

  /* -------------------------------------------------------------- ASSAULT */
  {
    slug: 'assault-violent-crimes',
    parent: 'criminal-defense',
    nav: 'Assault & Violent Crimes',
    title: 'Assault & Battery Lawyer in Snellville, GA | The Williams Law Firm',
    description:
      'Charged with assault, battery or a violent offense in Gwinnett County? Attorney Iymaan Williams prepares a careful defense. Call 404-998-2992.',
    eyebrow: 'Assault & Violent Crimes · Gwinnett County',
    h1: 'There are two sides to every confrontation. <em class="gold">Yours deserves to be heard.</em>',
    lede: 'Assault and battery charges often grow out of a few chaotic minutes, and the first account police hear is not always the accurate one. The firm defends people accused of violent offenses, from simple battery to the most serious felonies.',
    mark: 'Rights',
    attorney: {
      heading: 'Serious charges call for steady, careful counsel.',
      body: 'Iymaan Williams defends clients charged with violent offenses. She listens to your account without judgment, investigates what actually happened and prepares your defense with close attention to detail.',
    },
    blocks: [
      {
        type: 'ledger',
        bg: 'bg-paper',
        eyebrow: 'Understanding the charge',
        h: 'What the words mean in Georgia.',
        intro:
          'In everyday speech “assault” and “battery” are used interchangeably. In Georgia law they are different offenses with very different penalties.',
        items: [
          { h: 'Simple assault', p: 'An attempt to injure someone, or an act that places another person in reasonable fear of immediately being injured. No contact is required. Generally a misdemeanor.' },
          { h: 'Simple battery', p: 'Intentional physical contact of an insulting or provoking nature, or intentionally causing physical harm. Generally a misdemeanor.' },
          { h: 'Battery', p: 'Intentionally causing substantial physical harm or visible bodily harm, such as a black eye or swelling. A misdemeanor in most first cases, with enhanced penalties in certain circumstances.' },
          { h: 'Aggravated assault', p: 'An assault with intent to murder, rape or rob, or with a deadly weapon or an object likely to cause serious injury. A felony punishable by one to twenty years in prison.' },
          { h: 'Aggravated battery', p: 'Maliciously causing bodily harm by depriving a person of a body part, rendering it useless or seriously disfiguring it. A felony punishable by one to twenty years in prison.' },
          { h: 'Family violence', p: 'When the people involved are spouses, former spouses, parents of the same child or members of the same household, the charge carries added consequences, including possible loss of firearm rights.' },
        ],
      },
      {
        type: 'prose',
        bg: 'bg-ivory',
        eyebrow: 'Building a defense',
        h: 'How these cases are challenged.',
        html: `<p>The prosecution must prove every element of the charge beyond a reasonable doubt. A defense is built by testing each piece of that proof and by presenting the facts the first police report left out.</p>
<h3>Self-defense and defense of others</h3>
<p>Georgia law allows a person to use force when they reasonably believe it is necessary to defend themselves or someone else against another’s imminent use of unlawful force. Georgia does not require a person to retreat before defending themselves. Whether force was justified depends on the specific facts, which is why a careful investigation matters.</p>
<h3>Credibility and conflicting accounts</h3>
<p>Many cases rest on one person’s word. Inconsistent statements, a motive to exaggerate, intoxication and the physical evidence can all bear on whose account is reliable.</p>
<h3>Evidence beyond the report</h3>
<p>911 recordings, body camera footage, surveillance video, medical records, photographs and independent witnesses frequently change the picture. Some of this evidence is kept only for a short time, so it should be requested early.</p>
<h3>The level of the charge</h3>
<p>The line between a misdemeanor and a felony can depend on the degree of injury or on whether an object counts as a weapon. Challenging that classification can dramatically change what a person is facing.</p>`,
        aside: {
          h: 'About bond conditions',
          html: '<p>Judges often order no contact with the other person as a condition of bond. That order applies even if the other person reaches out to you first. Violating it can send you back to jail and lead to new charges.</p>',
        },
      },
      {
        type: 'checks',
        bg: 'bg-navy',
        eyebrow: 'What clients should know',
        h: 'If you have been accused or arrested.',
        items: [
          '<b>Do not contact the accuser</b> to apologize, explain or work things out. It can be treated as a bond violation or as witness intimidation.',
          '<b>Do not give a statement</b> to investigators without your attorney, even if you believe the facts clear you.',
          '<b>Preserve evidence.</b> Save texts, call logs, photos of any injuries you received, and the names of anyone who saw what happened.',
          '<b>The accuser cannot simply “drop the charges.”</b> Once an arrest is made, the decision belongs to the prosecutor, not the complaining witness.',
          '<b>Follow every bond condition exactly,</b> and tell your lawyer if a condition is unworkable so it can be raised with the court properly.',
        ],
      },
    ],
    faqs: [
      {
        q: 'The other person wants to drop the charges. Is the case over?',
        a: 'Not automatically. In Georgia the prosecutor decides whether a case goes forward, and prosecutors can and do proceed without a cooperating witness. The accuser’s wishes are one factor your attorney can bring to the prosecutor’s attention.',
      },
      {
        q: 'What if I was defending myself?',
        a: 'Self-defense is a recognized justification under Georgia law, and a person who was justified in using force is not guilty of a crime. Raising it effectively requires evidence, so tell your attorney everything that led up to the incident, including any prior threats.',
      },
      {
        q: 'Is aggravated assault always a felony?',
        a: 'Yes. Aggravated assault is a felony in Georgia, generally punishable by one to twenty years in prison, with higher minimums in certain circumstances. Whether the facts actually support an aggravated charge rather than a lesser offense is frequently a contested issue.',
      },
      {
        q: 'Will a family violence charge affect my right to own a gun?',
        a: 'It can. Under federal law, a conviction for a misdemeanor crime of domestic violence generally prohibits possessing firearms. This is one of several lasting consequences to discuss with your attorney before deciding how to resolve a case.',
      },
    ],
    related: [
      { kicker: 'Criminal defense', label: 'DUI Defense', href: '/criminal-defense/dui-defense/' },
      { kicker: 'Criminal defense', label: 'Drug Charges', href: '/criminal-defense/drug-charges/' },
      { kicker: 'Overview', label: 'All Criminal Defense', href: '/criminal-defense/' },
    ],
    cta: {
      heading: 'Accused of a violent offense? <em class="gold">Speak with counsel first.</em>',
      body: 'What you say and do in the days after an arrest matters. Get guidance before you talk to anyone else about the case.',
    },
  },

  /* ------------------------------------------------------------------ CAR */
  {
    slug: 'car-accidents',
    parent: 'personal-injury',
    nav: 'Car Accidents',
    title: 'Car Accident Lawyer in Snellville, GA | The Williams Law Firm',
    description:
      'Hurt in a car accident in Snellville or Gwinnett County? Attorney Iymaan Williams deals with the insurer so you can focus on recovery. Call 404-998-2992.',
    eyebrow: 'Car Accidents · Snellville & Gwinnett County',
    h1: 'After a crash, you should be healing. <em class="gold">Not arguing with an insurer.</em>',
    lede: 'A collision on Scenic Highway, Highway 78 or anywhere else in Gwinnett County can leave you with injuries, a damaged car and a stack of forms. The firm handles the claim so you can concentrate on getting well.',
    mark: 'Recovery',
    attorney: {
      heading: 'One attorney, from first call to resolution.',
      body: 'Iymaan Williams handles your claim personally and keeps you updated as it moves. You will always know what has been done, what comes next and why.',
    },
    blocks: [
      {
        type: 'checks',
        bg: 'bg-paper',
        eyebrow: 'Right after a collision',
        h: 'Seven things that protect your health and your claim.',
        intro: 'If you are reading this at the scene and anyone is hurt, call 911 first.',
        items: [
          '<b>Call 911 and wait for police.</b> Georgia law requires reporting crashes involving injury, death or significant property damage, and the police report becomes key evidence.',
          '<b>Get medical care promptly,</b> even if you feel fine. Some injuries surface hours or days later, and gaps in treatment are used by insurers to dispute claims.',
          '<b>Photograph everything:</b> vehicle positions, damage, skid marks, traffic signals, road conditions and visible injuries.',
          '<b>Exchange information</b> and collect names and numbers for witnesses before they leave.',
          '<b>Be careful what you say.</b> Do not apologize or guess about fault at the scene.',
          '<b>Notify your own insurer,</b> but think twice before giving the other driver’s insurer a recorded statement.',
          '<b>Keep a file</b> of bills, records, repair estimates and time missed from work.',
        ],
      },
      {
        type: 'prose',
        bg: 'bg-ivory',
        eyebrow: 'How Georgia law works',
        h: 'Fault, insurance and the rules that shape your claim.',
        html: `<p>Georgia is an at-fault state. The driver who caused the collision, and in practice that driver’s insurance company, is responsible for the harm that results. To recover, an injured person must show that the other driver was negligent and that the negligence caused the injuries.</p>
<h3>Shared fault</h3>
<p>Georgia follows a modified comparative negligence rule. If you were partly at fault, your compensation is reduced by your percentage of fault, and if you are found 50 percent or more responsible you cannot recover at all. Insurance adjusters know this rule well, which is why early statements about what happened matter so much.</p>
<h3>Deadlines</h3>
<p>In most cases a lawsuit for personal injuries must be filed within two years of the crash. Claims involving a city, county or state vehicle have much shorter written-notice deadlines, in some cases as little as six months. Waiting can cost you the claim entirely.</p>
<h3>When the other driver has little or no insurance</h3>
<p>Georgia requires drivers to carry liability coverage, but the minimum limits are modest and some drivers carry none. Your own uninsured/underinsured motorist (UM) coverage may apply. Reviewing every available policy is one of the first things the firm does.</p>`,
        aside: {
          h: 'About that quick settlement offer',
          html: '<p>An early offer may arrive before you know the full extent of your injuries. Once you sign a release, the claim is over, even if your condition worsens. Have an attorney review it first.</p>',
        },
      },
      {
        type: 'cards',
        bg: 'bg-paper',
        eyebrow: 'What a claim can include',
        h: 'The losses Georgia law recognizes.',
        intro: 'Every claim is different, and no attorney can promise a particular amount. These are the categories of damages a car accident claim may include.',
        cols: 3,
        items: [
          { k: 'Economic', h: 'Medical expenses', p: 'Emergency care, hospital stays, surgery, therapy, medication and the reasonable cost of future treatment.' },
          { k: 'Economic', h: 'Lost income', p: 'Wages lost while you recover, and reduced earning capacity if your injuries affect your ability to work.' },
          { k: 'Economic', h: 'Property damage', p: 'Repair or replacement of your vehicle, rental costs and, in some cases, its diminished value.' },
          { k: 'Non-economic', h: 'Pain and suffering', p: 'The physical pain, emotional distress and loss of enjoyment of life caused by the injury.' },
          { k: 'Family', h: 'Loss of consortium', p: 'A spouse’s separate claim for the effect of a serious injury on the marriage.' },
          { k: 'Limited cases', h: 'Punitive damages', p: 'Available only in specific circumstances, such as a crash caused by a drunk driver.' },
        ],
      },
      {
        type: 'steps',
        bg: 'bg-navy',
        eyebrow: 'How the firm helps',
        h: 'What happens once you hire the firm.',
        items: [
          { k: 'One', h: 'Investigation', p: 'The firm gathers the police report, photographs, witness statements and insurance information, and identifies every policy that may apply.' },
          { k: 'Two', h: 'Treatment and records', p: 'You focus on your medical care while the firm collects the records and bills that document your injuries.' },
          { k: 'Three', h: 'Demand and negotiation', p: 'When the full picture is clear, the firm presents a documented demand to the insurer and negotiates on your behalf.' },
          { k: 'Four', h: 'Resolution', p: 'Most claims resolve through settlement. If the insurer will not be fair, filing a lawsuit is discussed with you before any decision is made.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'How long do I have to file a car accident claim in Georgia?',
        a: 'Generally two years from the date of the crash for personal injuries, and four years for damage to your vehicle. Claims against government entities require written notice much sooner. Because exceptions exist in both directions, confirm the deadline for your situation with an attorney promptly.',
      },
      {
        q: 'What if I was partly at fault?',
        a: 'You may still recover as long as you were less than 50 percent responsible. Your compensation is reduced by your share of fault. Insurers often overstate an injured person’s share, so do not accept their assessment without advice.',
      },
      {
        q: 'Should I give the other driver’s insurance company a recorded statement?',
        a: 'You are generally not required to, and it is rarely in your interest to do so before speaking with a lawyer. Adjusters are trained to ask questions in ways that can limit a claim.',
      },
      {
        q: 'How are attorney’s fees handled in injury cases?',
        a: 'Fee arrangements are explained in writing before you hire the firm, so there are no surprises. Ask about fees during your first conversation.',
      },
    ],
    related: [
      { kicker: 'Personal injury', label: 'Slip and Fall', href: '/personal-injury/slip-and-fall/' },
      { kicker: 'Overview', label: 'All Personal Injury', href: '/personal-injury/' },
      { kicker: 'The firm', label: 'About Iymaan Williams', href: '/about/' },
    ],
    cta: {
      heading: 'Hurt in a crash? <em class="gold">Let’s talk about what comes next.</em>',
      body: 'Understanding your rights early can make the whole process less stressful. Reach out when you are ready.',
    },
  },

  /* ----------------------------------------------------------------- SLIP */
  {
    slug: 'slip-and-fall',
    parent: 'personal-injury',
    nav: 'Slip and Fall',
    title: 'Slip and Fall Lawyer in Snellville, GA | The Williams Law Firm',
    description:
      'Hurt in a fall at a store, apartment complex or other property in Gwinnett County? Attorney Iymaan Williams handles Georgia slip and fall claims. Call 404-998-2992.',
    eyebrow: 'Slip and Fall · Premises Liability',
    h1: 'A fall can change everything. <em class="gold">The property owner may be responsible.</em>',
    lede: 'Businesses and property owners in Georgia have a legal duty to keep their premises reasonably safe for the people they invite in. When they do not, and someone is hurt, the law provides a way to hold them accountable.',
    mark: 'Care',
    attorney: {
      heading: 'These claims are won on evidence gathered early.',
      body: 'Iymaan Williams moves quickly to preserve the proof a fall claim depends on, and explains honestly how Georgia law applies to what happened to you.',
    },
    blocks: [
      {
        type: 'prose',
        bg: 'bg-paper',
        eyebrow: 'The legal standard',
        h: 'What you have to prove in Georgia.',
        html: `<p>Under O.C.G.A. § 51-3-1, an owner or occupier of land who invites the public onto the property must exercise ordinary care to keep the premises and approaches safe. That does not make an owner automatically liable for every fall. Georgia courts generally require an injured person to show two things:</p>
<ul>
<li><strong>The owner knew, or should have known, about the hazard.</strong> This can be actual knowledge, such as an employee who saw a spill, or “constructive” knowledge, shown for example by evidence that the hazard existed long enough that a reasonable inspection would have found it.</li>
<li><strong>You did not know about the hazard</strong> despite using ordinary care for your own safety.</li>
</ul>
<p>Expect the property owner’s insurer to argue that the hazard was “open and obvious,” that you were distracted, or that your footwear was to blame. Georgia’s comparative negligence rule also applies: compensation is reduced by your share of fault and barred if you were 50 percent or more responsible.</p>
<p>These are demanding standards, and they are the reason evidence matters so much. They are also the reason an honest early assessment of your claim is valuable.</p>`,
        aside: {
          h: 'Video does not last',
          html: '<p>Many stores record over surveillance footage within days or weeks. A prompt written request to preserve it can make the difference between proving how long a hazard was there and having no proof at all.</p>',
        },
      },
      {
        type: 'cards',
        bg: 'bg-ivory',
        eyebrow: 'Common causes',
        h: 'Hazards behind fall injuries.',
        cols: 3,
        items: [
          { k: 'Floors', h: 'Spills and wet surfaces', p: 'Leaks, tracked-in rain, freshly mopped floors without warning signs and spilled products in store aisles.' },
          { k: 'Walkways', h: 'Uneven surfaces', p: 'Broken pavement, potholes in parking lots, loose mats, torn carpet and unmarked changes in floor level.' },
          { k: 'Stairs', h: 'Stairways and railings', p: 'Missing or loose handrails, worn treads and steps that do not meet building standards.' },
          { k: 'Visibility', h: 'Poor lighting', p: 'Dim stairwells, parking decks and walkways that hide hazards a person would otherwise see.' },
          { k: 'Obstructions', h: 'Cluttered aisles', p: 'Merchandise, cords, pallets and debris left where customers walk.' },
          { k: 'Housing', h: 'Apartment common areas', p: 'Hazards a landlord failed to repair in stairways, breezeways and other shared spaces.' },
        ],
      },
      {
        type: 'checks',
        bg: 'bg-navy',
        eyebrow: 'What to do after a fall',
        h: 'Steps that preserve your claim.',
        items: [
          '<b>Report the fall</b> to a manager or the property owner before you leave, and ask for a copy of the incident report.',
          '<b>Photograph the exact hazard</b> and the surrounding area, including any lack of warning signs, before it is cleaned up or repaired.',
          '<b>Get the names</b> of employees and witnesses who saw the fall or the condition.',
          '<b>See a doctor right away</b> and describe how the fall happened.',
          '<b>Keep the shoes and clothing</b> you were wearing, unwashed, in a bag.',
          '<b>Do not give a recorded statement</b> or sign anything for the property’s insurer before getting legal advice.',
        ],
        note: 'The general deadline to file a personal injury lawsuit in Georgia is two years. Claims against a city or county require written notice far sooner.',
      },
    ],
    faqs: [
      {
        q: 'Is the property owner automatically responsible because I fell on their property?',
        a: 'No. Georgia law requires proof that the owner knew or should have known of a hazard and that you, using ordinary care, did not. Whether those elements can be shown depends on the evidence, which is why a prompt investigation matters.',
      },
      {
        q: 'What if there was a “wet floor” sign?',
        a: 'A warning sign helps the owner’s defense but does not necessarily end a claim. Where the sign was placed, whether it was visible and whether the condition was more dangerous than the warning suggested can all matter.',
      },
      {
        q: 'I fell at an apartment complex. Is that different?',
        a: 'It can be. Landlords are generally responsible for common areas and for defects they have a duty to repair, and the analysis may differ for tenants and guests. Bring your lease and any repair requests you made to your consultation.',
      },
      {
        q: 'How long do I have to bring a slip and fall claim?',
        a: 'Generally two years from the date of the fall. If the property is owned by a city, county or the state, written notice may be required within as little as six months. Speak with an attorney as soon as you can so that no deadline is missed.',
      },
    ],
    related: [
      { kicker: 'Personal injury', label: 'Car Accidents', href: '/personal-injury/car-accidents/' },
      { kicker: 'Overview', label: 'All Personal Injury', href: '/personal-injury/' },
      { kicker: 'The firm', label: 'About Iymaan Williams', href: '/about/' },
    ],
    cta: {
      heading: 'Injured in a fall? <em class="gold">Find out where you stand.</em>',
      body: 'A short conversation can tell you whether you may have a claim and what evidence should be preserved now.',
    },
  },
];
