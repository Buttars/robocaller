export interface Campaign {
  title: string;
  description: string;
  steps: Array<string>;
  scheduled: boolean;
  lastRan: number | Date;
}

export function createCampaign(params: Partial<Campaign>) {
  return {
    ...params,
  } as Campaign;
}

export function createInitalState() {
  return [] as Array<Campaign>;
}
