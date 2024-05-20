import { ShoppingCart, User2 } from "lucide-react";

const AccountBox = () => {
  return (
    <div id="user-box" className="flex items-center gap-4">
      {/* Cart */}
      <button>
        <ShoppingCart className="size-6" />
      </button>
      {/* Account */}
      <button>
        <User2 className="size-6" />
      </button>
    </div>
  );
};

export default AccountBox;
