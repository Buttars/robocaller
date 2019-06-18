export interface Campaign {
  id: string;
  title: string;
  description: string;
  steps: Array<string>;
  phones: Array<string>;
  scheduled: boolean;
  lastRan: undefined | number | Date;
}

export function createCampaign(params: Partial<Campaign>) {
  return {
    ...params,
  } as Campaign;
}

export function createInitalState() {
  return [] as Array<Campaign>;
}
