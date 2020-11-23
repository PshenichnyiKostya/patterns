import TheFirstBuilderType from "./TheFirstBuilderType";
import Director from "./Director";

const builder = new TheFirstBuilderType();
const director = new Director(builder);
director.buildFullFeaturedProduct().listParts()
director.buildMinimalViableProduct().listParts()
