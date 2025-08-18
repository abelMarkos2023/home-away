import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TDescriptionInputProps = {
  name: string; 
  labelText: string;
defaultValue?: string;
};

 const DescriptionInput = ({
  name, 
    labelText,
    defaultValue = '',
}: TDescriptionInputProps) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md font-semibold">
        {labelText}
      </Label>
      <Textarea
        name={name}
        id={name}
        defaultValue={defaultValue.length > 0 ? defaultValue : tempDefaultDescription}
        className="mt-1 w-full p-2 border rounded"
        required
        rows={5}
      />
    </div>
  );
}

export default DescriptionInput;

const tempDefaultDescription =
  'Glamping Tuscan Style in an Aframe Cabin Tent, nestled in a beautiful olive orchard. AC, heat, Queen Bed, TV, Wi-Fi and an amazing view. Close to Weeki Wachee River State Park, mermaids, manatees, Chassahwitzka River and on the SC Bike Path. Kayaks available for rivers. Bathhouse, fire pit, Kitchenette, fresh eggs. Relax & enjoy fresh country air. No pets please. Ducks, hens and roosters roam the grounds. We have a Pot Cake Rescue from Bimini, Retriever and Pom dog. The space is inspiring and relaxing. Enjoy the beauty of the orchard. Spring trees are in blossom and harvested in Fall. We have a farm store where we sell our farm to table products';