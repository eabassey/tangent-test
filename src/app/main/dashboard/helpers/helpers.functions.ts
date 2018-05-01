// Helper Function
export const transformToFullDescription = obj => {
  switch (obj.name) {
    case raceMap.BlackAfrican.Short:
      return { name: raceMap.BlackAfrican.Full, value: obj.value };

    case raceMap.White.Short:
      return { name: raceMap.White.Full, value: obj.value };

    case raceMap.Indian.Short:
      return { name: raceMap.Indian.Full, value: obj.value };

    case raceMap.Coloured.Short:
      return { name: raceMap.Coloured.Full, value: obj.value };

    case raceMap.NonDominant.Short:
      return { name: raceMap.NonDominant.Full, value: obj.value };

    case genderMap.Male.Short:
      return { name: genderMap.Male.Full, value: obj.value };

    case genderMap.Female.Short:
      return { name: genderMap.Female.Full, value: obj.value };
  }
};

export const transformToShortDescription = obj => {
  switch (obj.name) {
    case raceMap.BlackAfrican.Full:
      return raceMap.BlackAfrican.Short;

    case raceMap.White.Full:
      return raceMap.White.Short;

    case raceMap.Indian.Full:
      return raceMap.Indian.Short;

    case raceMap.Coloured.Full:
      return raceMap.Coloured.Short;

    case raceMap.NonDominant.Full:
      return raceMap.NonDominant.Short;

    case genderMap.Male.Full:
      return genderMap.Male.Short;

    case genderMap.Female.Full:
      return genderMap.Female.Short;
  }
};

const raceMap = {
  BlackAfrican: { Short: 'B', Full: 'Black African' },
  White: { Short: 'W', Full: 'White' },
  Indian: { Short: 'I', Full: 'Indian' },
  Coloured: { Short: 'C', Full: 'Coloured' },
  NonDominant: { Short: 'N', Full: 'Non Dominant' }
};

const genderMap = {
  Male: { Short: 'M', Full: 'Male' },
  Female: { Short: 'F', Full: 'Female' }
};
