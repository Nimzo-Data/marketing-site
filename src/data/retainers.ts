export interface RetainerTier {
  name: string;
  priceRange: string;
  features: string[];
  responseTime: string;
  checkInFrequency: string;
  recommended?: boolean;
  bestFor: string;
}

export const retainerTiers: RetainerTier[] = [
  {
    name: 'Maintenance',
    priceRange: '€1,000 – €1,500/month',
    features: [
      'Monthly BigQuery cost & performance review',
      'Pipeline monitoring — catch failures before you notice',
      'Incident response within 4 business hours',
      'Quarterly check-in call (60 min)',
      'Minor config changes & documentation updates',
    ],
    responseTime: '4 business hours',
    checkInFrequency: 'Quarterly',
    bestFor: 'Stable platforms that need a safety net',
  },
  {
    name: 'Growth',
    priceRange: '€2,000 – €3,000/month',
    features: [
      'Everything in Maintenance',
      'Monthly strategy session (60 min)',
      'Minor feature work — up to 8 hours/month',
      'Priority incident response within 2 business hours',
      'Slack/Teams async access',
    ],
    responseTime: '2 business hours',
    checkInFrequency: 'Monthly',
    recommended: true,
    bestFor: 'Growing teams wanting continuous improvement',
  },
  {
    name: 'Partnership',
    priceRange: '€3,500 – €4,500/month',
    features: [
      'Everything in Growth',
      'Weekly check-in call (30 min)',
      'Dedicated capacity — up to 20 hours/month',
      'Architecture review for new initiatives',
      'First priority scheduling for ad-hoc work',
    ],
    responseTime: 'Priority',
    checkInFrequency: 'Weekly',
    bestFor: 'Data-central businesses needing a senior partner',
  },
];
