import {useQuery} from "@tanstack/react-query";
import {request} from "graphql-request";


const ENDPOINT = 'https://api.platform.opentargets.org/api/v4/graphql';

const GET_DISEASE_DATA = `
 query lungCarcinomaAssociatedTargets {
  disease(efoId: "EFO_0001071") {
    associatedTargets(page: { index: 0, size: 25 }) {
      rows {
        target {
          id
          approvedSymbol
          approvedName
        }
        score
        datatypeScores {
          id
          score
        }
      }
    }
  }
}
`;

export function useDisease() {
    return useQuery({
        queryKey: ['EFO_0001071'],
        queryFn: () => request(ENDPOINT, GET_DISEASE_DATA),
        select: (data) => {
            const rows = data?.disease?.associatedTargets?.rows || [];
            if (!rows && rows.length === 0) return null;
            // Descending
            const sortedTargets = [...rows].sort((a, b) => b.score - a.score);
            return sortedTargets.slice(0, 10);
        }
    })
}
