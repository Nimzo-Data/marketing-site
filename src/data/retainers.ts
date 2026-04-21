export interface RetainerTier {
  name: string;
  subtitle: string;
  price: string;
  hours: string;
  features: {
    label: string;
    maintenance: boolean;
    growth: boolean;
    partnership: boolean;
  }[];
  responseTime: string;
  checkInFrequency: string;
  highlighted?: boolean;
}

export interface RetainerRow {
  label: string;
  maintenance: string | boolean;
  growth: string | boolean;
  partnership: string | boolean;
  group?: 'features' | 'meta';
}

export const retainerTiers: RetainerTier[] = [
  {
    name: 'Maintenance',
    subtitle: 'Keep it running',
    price: '€1,000/month',
    hours: 'Up to 8 hours',
    features: [],
    responseTime: 'Next business day',
    checkInFrequency: 'Monthly',
  },
  {
    name: 'Growth',
    subtitle: 'Continuous improvement',
    price: '€2,000/month',
    hours: 'Up to 16 hours',
    features: [],
    responseTime: 'Same business day',
    checkInFrequency: 'Bi-weekly',
    highlighted: true,
  },
  {
    name: 'Partnership',
    subtitle: 'Fractional data team',
    price: '€4,000/month',
    hours: 'Up to 32 hours',
    features: [],
    responseTime: 'Within 4 business hours',
    checkInFrequency: 'Weekly',
  },
];

export const retainerRows: RetainerRow[] = [
  { label: 'Bug fixes & monitoring',    maintenance: true,  growth: true,  partnership: true },
  { label: 'Minor dashboard tweaks',    maintenance: true,  growth: true,  partnership: true },
  { label: 'New data sources',          maintenance: false, growth: true,  partnership: true },
  { label: 'New dashboards',            maintenance: false, growth: true,  partnership: true },
  { label: 'Transformation updates',    maintenance: false, growth: true,  partnership: true },
  { label: 'Custom scripts',            maintenance: false, growth: false, partnership: true },
  { label: 'Strategic roadmap input',   maintenance: false, growth: false, partnership: true },
  { label: 'Architecture review',       maintenance: false, growth: false, partnership: true },
];
