// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'major'; // Unique brand property
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: 'minor'; // Unique brand property
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major' // Return the brand property
    };
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor' // Return the brand property
    };
  }
  
  // Example usage
  const mathMajor: MajorCredits = { credits: 3, brand: 'major' };
  const csMajor: MajorCredits = { credits: 4, brand: 'major' };
  const englishMinor: MinorCredits = { credits: 2, brand: 'minor' };
  const historyMinor: MinorCredits = { credits: 3, brand: 'minor' };
  
  const totalMajorCredits = sumMajorCredits(mathMajor, csMajor);
  const totalMinorCredits = sumMinorCredits(englishMinor, historyMinor);
  
  console.log('Total Major Credits:', totalMajorCredits);
  console.log('Total Minor Credits:', totalMinorCredits);
  