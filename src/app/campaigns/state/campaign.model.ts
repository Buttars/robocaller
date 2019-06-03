export interface Campaign {
  title: string;
  description: string;
  steps: Array<string>;
}

export function createCampaign(params: Partial<Campaign>) {
  return {
    ...params,
  } as Campaign;
}

export function createInitalState() {
  return [] as Array<Campaign>;
}
