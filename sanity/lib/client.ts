import { createClient } from "next-sanity";

import {
  sanityDataset,
  sanityApiToken,
  sanityProjectId,
  sanityApiVersion,
} from '../../config/secrets';

export const client = createClient({
  useCdn: true,
  token: sanityApiToken,
  dataset: sanityDataset,
  projectId: sanityProjectId,
  apiVersion: sanityApiVersion,
});