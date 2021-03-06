import FindKnowledgeAboutASpecificGeneOrProtein from
'views/AppsView/Workflows/ExpWorkflows/FindKnowledgeAboutASpecificGeneOrProtein';
import ExploreMicroscopyImagingData from
'views/AppsView/Workflows/ExpWorkflows/ExploreMicroscopyImagingData';
import FindNovelCompoundsThatMimicOrReverseADiseaseSignature from
'views/AppsView/Workflows/ExpWorkflows/FindNovelCompoundsThatMimicOrReverseADiseaseSignature';
import DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine from
'views/AppsView/Workflows/ExpWorkflows/DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine';
import CheckIfASmallMoleculeHasBeenProfiled from
'views/AppsView/Workflows/ExpWorkflows/CheckIfASmallMoleculeHasBeenProfiled';
import QueryAGeneExpressionSignatureAgainst from
'views/AppsView/Workflows/ExpWorkflows/QueryAGeneExpressionSignatureAgainst';
import ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines from
'views/AppsView/Workflows/ExpWorkflows/ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines';
import IdentifyMicroenvironmentsThatPromoteProliferation from
'views/AppsView/Workflows/ExpWorkflows/IdentifyMicroenvironmentsThatPromoteProliferation';


const awRoute = '/tools/workflows';

export default [
  {
    title: 'Experimentalist Workflows',
    route: `${awRoute}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`,
    children: [
      {
        title: FindKnowledgeAboutASpecificGeneOrProtein.subTitle,
        route: `${awRoute}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`,
        children: [],
      },
      {
        title: ExploreMicroscopyImagingData.subTitle,
        route: `${awRoute}/${ExploreMicroscopyImagingData.path}`,
        children: [],
      },
      {
        title: FindNovelCompoundsThatMimicOrReverseADiseaseSignature.subTitle,
        route: `${awRoute}/${FindNovelCompoundsThatMimicOrReverseADiseaseSignature.path}`,
        children: [],
      },
      {
        title: DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.subTitle,
        route: `${awRoute}/${DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.path}`,
        children: [],
      },
      {
        title: CheckIfASmallMoleculeHasBeenProfiled.subTitle,
        route: `${awRoute}/${CheckIfASmallMoleculeHasBeenProfiled.path}`,
        children: [],
      },
      {
        title: QueryAGeneExpressionSignatureAgainst.subTitle,
        route: `${awRoute}/${QueryAGeneExpressionSignatureAgainst.path}`,
        children: [],
      },
      {
        title: ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines.subTitle,
        route: `${awRoute}/${ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines.path}`,
        children: [],
      },
      {
        title: IdentifyMicroenvironmentsThatPromoteProliferation.subTitle,
        route: `${awRoute}/${IdentifyMicroenvironmentsThatPromoteProliferation.path}`,
        children: [],
      },
    ],
  },
];
