using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DarkSoulsCore.Models
{
    public partial class DarkSoulsDbContext : DbContext
    {
        public virtual DbSet<BaseWeapons> BaseWeapons { get; set; }
        public virtual DbSet<Corrections> Corrections { get; set; }
        public virtual DbSet<Infusions> Infusions { get; set; }
        public virtual DbSet<Protectors> Protectors { get; set; }
        public virtual DbSet<ProtectorUpgrades> ProtectorUpgrades { get; set; }
        public virtual DbSet<StartingClass> StartingClass { get; set; }
        public virtual DbSet<Upgrades> Upgrades { get; set; }
        public virtual DbSet<Weapons> Weapons { get; set; }
        public virtual DbSet<WeaponUpgrades> WeaponUpgrades { get; set; }

        public DarkSoulsDbContext(DbContextOptions<DarkSoulsDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BaseWeapons>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Corrections>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AdjPtMaxGrowVal0).HasColumnName("AdjPt_maxGrowVal0");

                entity.Property(e => e.AdjPtMaxGrowVal1).HasColumnName("AdjPt_maxGrowVal1");

                entity.Property(e => e.AdjPtMaxGrowVal2).HasColumnName("AdjPt_maxGrowVal2");

                entity.Property(e => e.AdjPtMaxGrowVal3).HasColumnName("AdjPt_maxGrowVal3");

                entity.Property(e => e.AdjPtMaxGrowVal4).HasColumnName("AdjPt_maxGrowVal4");

                entity.Property(e => e.AdjustmentValue).HasColumnName("Adjustment_value");

                entity.Property(e => e.BoundryInclinationSoul).HasColumnName("Boundry_inclination_soul");

                entity.Property(e => e.BoundryValue).HasColumnName("Boundry_value");

                entity.Property(e => e.InitInclinationSoul).HasColumnName("Init_inclination_soul");

                entity.Property(e => e.JapaneseName)
                    .HasColumnName("Japanese Name")
                    .HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);

                entity.Property(e => e.TranslatedName)
                    .HasColumnName("Translated Name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Infusions>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Protectors>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ArmEquip).HasColumnName("armEquip");

                entity.Property(e => e.BasicPrice).HasColumnName("Basic Price");

                entity.Property(e => e.BodyEquip).HasColumnName("bodyEquip");

                entity.Property(e => e.CorectSarecover).HasColumnName("corectSARecover");

                entity.Property(e => e.DefenseBlow).HasColumnName("defenseBlow");

                entity.Property(e => e.DefenseFire).HasColumnName("defenseFire");

                entity.Property(e => e.DefenseFlickPower).HasColumnName("Defense Flick Power");

                entity.Property(e => e.DefenseMagic).HasColumnName("defenseMagic");

                entity.Property(e => e.DefenseMaterial).HasColumnName("defenseMaterial");

                entity.Property(e => e.DefenseMaterialSfx).HasColumnName("defenseMaterialSfx");

                entity.Property(e => e.DefenseMaterialSfxWeak).HasColumnName("defenseMaterialSfx_Weak");

                entity.Property(e => e.DefenseMaterialWeak).HasColumnName("defenseMaterial_Weak");

                entity.Property(e => e.DefenseSlash).HasColumnName("defenseSlash");

                entity.Property(e => e.DefenseThrust).HasColumnName("defenseThrust");

                entity.Property(e => e.DefenseThunder).HasColumnName("defenseThunder");

                entity.Property(e => e.DisableMultiDropShare).HasColumnName("disableMultiDropShare");

                entity.Property(e => e.Durability).HasColumnName("durability");

                entity.Property(e => e.DurabilityMax).HasColumnName("durabilityMax");

                entity.Property(e => e.EnglishName)
                    .HasColumnName("English name")
                    .HasMaxLength(255);

                entity.Property(e => e.EquipModelCategory).HasColumnName("equipModelCategory");

                entity.Property(e => e.EquipModelGender).HasColumnName("equipModelGender");

                entity.Property(e => e.EquipModelId).HasColumnName("equipModelId");

                entity.Property(e => e.FaceScaleFMaxX).HasColumnName("faceScaleF_MaxX");

                entity.Property(e => e.FaceScaleFMaxZ).HasColumnName("faceScaleF_MaxZ");

                entity.Property(e => e.FaceScaleFScaleX).HasColumnName("faceScaleF_ScaleX");

                entity.Property(e => e.FaceScaleFScaleZ).HasColumnName("faceScaleF_ScaleZ");

                entity.Property(e => e.FaceScaleMMaxX).HasColumnName("faceScaleM_MaxX");

                entity.Property(e => e.FaceScaleMMaxZ).HasColumnName("faceScaleM_MaxZ");

                entity.Property(e => e.FaceScaleMScaleX).HasColumnName("faceScaleM_ScaleX");

                entity.Property(e => e.FaceScaleMScaleZ).HasColumnName("faceScaleM_ScaleZ");

                entity.Property(e => e.FlickDamageCutRate).HasColumnName("Flick Damage Cut Rate");

                entity.Property(e => e.HeadEquip).HasColumnName("headEquip");

                entity.Property(e => e.IconIdF).HasColumnName("iconIdF");

                entity.Property(e => e.IconIdM).HasColumnName("iconIdM");

                entity.Property(e => e.InvisibleFlag00).HasColumnName("invisibleFlag00");

                entity.Property(e => e.InvisibleFlag01).HasColumnName("invisibleFlag01");

                entity.Property(e => e.InvisibleFlag02).HasColumnName("invisibleFlag02");

                entity.Property(e => e.InvisibleFlag03).HasColumnName("invisibleFlag03");

                entity.Property(e => e.InvisibleFlag04).HasColumnName("invisibleFlag04");

                entity.Property(e => e.InvisibleFlag05).HasColumnName("invisibleFlag05");

                entity.Property(e => e.InvisibleFlag06).HasColumnName("invisibleFlag06");

                entity.Property(e => e.InvisibleFlag07).HasColumnName("invisibleFlag07");

                entity.Property(e => e.InvisibleFlag08).HasColumnName("invisibleFlag08");

                entity.Property(e => e.InvisibleFlag09).HasColumnName("invisibleFlag09");

                entity.Property(e => e.InvisibleFlag10).HasColumnName("invisibleFlag10");

                entity.Property(e => e.InvisibleFlag11).HasColumnName("invisibleFlag11");

                entity.Property(e => e.InvisibleFlag12).HasColumnName("invisibleFlag12");

                entity.Property(e => e.InvisibleFlag13).HasColumnName("invisibleFlag13");

                entity.Property(e => e.InvisibleFlag14).HasColumnName("invisibleFlag14");

                entity.Property(e => e.InvisibleFlag15).HasColumnName("invisibleFlag15");

                entity.Property(e => e.InvisibleFlag16).HasColumnName("invisibleFlag16");

                entity.Property(e => e.InvisibleFlag17).HasColumnName("invisibleFlag17");

                entity.Property(e => e.InvisibleFlag18).HasColumnName("invisibleFlag18");

                entity.Property(e => e.InvisibleFlag19).HasColumnName("invisibleFlag19");

                entity.Property(e => e.InvisibleFlag20).HasColumnName("invisibleFlag20");

                entity.Property(e => e.InvisibleFlag21).HasColumnName("invisibleFlag21");

                entity.Property(e => e.InvisibleFlag22).HasColumnName("invisibleFlag22");

                entity.Property(e => e.InvisibleFlag23).HasColumnName("invisibleFlag23");

                entity.Property(e => e.InvisibleFlag24).HasColumnName("invisibleFlag24");

                entity.Property(e => e.InvisibleFlag25).HasColumnName("invisibleFlag25");

                entity.Property(e => e.InvisibleFlag26).HasColumnName("invisibleFlag26");

                entity.Property(e => e.InvisibleFlag27).HasColumnName("invisibleFlag27");

                entity.Property(e => e.InvisibleFlag28).HasColumnName("invisibleFlag28");

                entity.Property(e => e.InvisibleFlag29).HasColumnName("invisibleFlag29");

                entity.Property(e => e.InvisibleFlag30).HasColumnName("invisibleFlag30");

                entity.Property(e => e.InvisibleFlag31).HasColumnName("invisibleFlag31");

                entity.Property(e => e.InvisibleFlag32).HasColumnName("invisibleFlag32");

                entity.Property(e => e.InvisibleFlag33).HasColumnName("invisibleFlag33");

                entity.Property(e => e.InvisibleFlag34).HasColumnName("invisibleFlag34");

                entity.Property(e => e.InvisibleFlag35).HasColumnName("invisibleFlag35");

                entity.Property(e => e.InvisibleFlag36).HasColumnName("invisibleFlag36");

                entity.Property(e => e.InvisibleFlag37).HasColumnName("invisibleFlag37");

                entity.Property(e => e.InvisibleFlag38).HasColumnName("invisibleFlag38");

                entity.Property(e => e.InvisibleFlag39).HasColumnName("invisibleFlag39");

                entity.Property(e => e.InvisibleFlag40).HasColumnName("invisibleFlag40");

                entity.Property(e => e.InvisibleFlag41).HasColumnName("invisibleFlag41");

                entity.Property(e => e.InvisibleFlag42).HasColumnName("invisibleFlag42");

                entity.Property(e => e.InvisibleFlag43).HasColumnName("invisibleFlag43");

                entity.Property(e => e.InvisibleFlag44).HasColumnName("invisibleFlag44");

                entity.Property(e => e.InvisibleFlag45).HasColumnName("invisibleFlag45");

                entity.Property(e => e.InvisibleFlag46).HasColumnName("invisibleFlag46");

                entity.Property(e => e.InvisibleFlag47).HasColumnName("invisibleFlag47");

                entity.Property(e => e.IsDeposit).HasColumnName("isDeposit");

                entity.Property(e => e.KnockBack).HasColumnName("knockBack");

                entity.Property(e => e.KnockbackBounceRate).HasColumnName("knockbackBounceRate");

                entity.Property(e => e.KnockbackParamId).HasColumnName("knockbackParamId");

                entity.Property(e => e.LegEquip).HasColumnName("legEquip");

                entity.Property(e => e.MaterialSetId).HasColumnName("materialSetId");

                entity.Property(e => e.OldSortId).HasColumnName("oldSortId");

                entity.Property(e => e.OriginEquipPro).HasColumnName("originEquipPro");

                entity.Property(e => e.OriginEquipPro1).HasColumnName("originEquipPro1");

                entity.Property(e => e.OriginEquipPro10).HasColumnName("originEquipPro10");

                entity.Property(e => e.OriginEquipPro11).HasColumnName("originEquipPro11");

                entity.Property(e => e.OriginEquipPro12).HasColumnName("originEquipPro12");

                entity.Property(e => e.OriginEquipPro13).HasColumnName("originEquipPro13");

                entity.Property(e => e.OriginEquipPro14).HasColumnName("originEquipPro14");

                entity.Property(e => e.OriginEquipPro15).HasColumnName("originEquipPro15");

                entity.Property(e => e.OriginEquipPro2).HasColumnName("originEquipPro2");

                entity.Property(e => e.OriginEquipPro3).HasColumnName("originEquipPro3");

                entity.Property(e => e.OriginEquipPro4).HasColumnName("originEquipPro4");

                entity.Property(e => e.OriginEquipPro5).HasColumnName("originEquipPro5");

                entity.Property(e => e.OriginEquipPro6).HasColumnName("originEquipPro6");

                entity.Property(e => e.OriginEquipPro7).HasColumnName("originEquipPro7");

                entity.Property(e => e.OriginEquipPro8).HasColumnName("originEquipPro8");

                entity.Property(e => e.OriginEquipPro9).HasColumnName("originEquipPro9");

                entity.Property(e => e.PartsDamageRate).HasColumnName("partsDamageRate");

                entity.Property(e => e.PartsDmgType).HasColumnName("partsDmgType");

                entity.Property(e => e.PhysicalDefense).HasColumnName("Physical Defense");

                entity.Property(e => e.ProtectorCategory).HasColumnName("protectorCategory");

                entity.Property(e => e.QwcId).HasColumnName("qwcId");

                entity.Property(e => e.ReinforceTypeId).HasColumnName("reinforceTypeId");

                entity.Property(e => e.RepairPrice).HasColumnName("Repair Price");

                entity.Property(e => e.ResidentSpEffectId).HasColumnName("residentSpEffectId");

                entity.Property(e => e.ResidentSpEffectId2).HasColumnName("residentSpEffectId2");

                entity.Property(e => e.ResidentSpEffectId3).HasColumnName("residentSpEffectId3");

                entity.Property(e => e.ResistBlood).HasColumnName("resistBlood");

                entity.Property(e => e.ResistCurse).HasColumnName("resistCurse");

                entity.Property(e => e.ResistDisease).HasColumnName("resistDisease");

                entity.Property(e => e.ResistPoison).HasColumnName("resistPoison");

                entity.Property(e => e.SaDurability).HasColumnName("saDurability");

                entity.Property(e => e.SellValue).HasColumnName("Sell Value");

                entity.Property(e => e.ShopLv).HasColumnName("shopLv");

                entity.Property(e => e.SimpleModelForDlc).HasColumnName("simpleModelForDlc");

                entity.Property(e => e.SortId).HasColumnName("sortId");

                entity.Property(e => e.TrophySgradeId).HasColumnName("trophySGradeId");

                entity.Property(e => e.UseFaceScale).HasColumnName("useFaceScale");

                entity.Property(e => e.VagrantBonusEneDropItemLotId).HasColumnName("vagrantBonusEneDropItemLotId");

                entity.Property(e => e.VagrantItemEneDropItemLotId).HasColumnName("vagrantItemEneDropItemLotId");

                entity.Property(e => e.VagrantItemLotId).HasColumnName("vagrantItemLotId");

                entity.Property(e => e.WanderingEquipId).HasColumnName("Wandering Equip Id");

                entity.Property(e => e.WeightKg).HasColumnName("Weight (kg)");
            });

            modelBuilder.Entity<ProtectorUpgrades>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(255);

                entity.Property(e => e.TranslatedName)
                    .HasColumnName("Translated name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<StartingClass>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Upgrades>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.EnglishName)
                    .HasColumnName("English Name")
                    .HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Weapons>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AntSaintDamageRate).HasColumnName("antSaintDamageRate");

                entity.Property(e => e.AntWeakADamageRate).HasColumnName("antWeakA_DamageRate");

                entity.Property(e => e.AntWeakBDamageRate).HasColumnName("antWeakB_DamageRate");

                entity.Property(e => e.AntiDemonDamageRate).HasColumnName("antiDemonDamageRate");

                entity.Property(e => e.ArrowSlotEquipable).HasColumnName("Arrow Slot Equipable");

                entity.Property(e => e.AttackBaseParry).HasColumnName("Attack Base Parry");

                entity.Property(e => e.AttackBaseRepel).HasColumnName("Attack Base Repel");

                entity.Property(e => e.AttackMaterial).HasColumnName("Attack Material");

                entity.Property(e => e.AttackThrowEscape).HasColumnName("attackThrowEscape");

                entity.Property(e => e.BaseChangeCategory).HasColumnName("Base Change Category");

                entity.Property(e => e.BasePrice).HasColumnName("Base Price");

                entity.Property(e => e.BehaviorVariationId).HasColumnName("Behavior Variation Id");

                entity.Property(e => e.BleedGuardResist).HasColumnName("Bleed Guard Resist");

                entity.Property(e => e.BlowGuardPercent).HasColumnName("Blow Guard Percent");

                entity.Property(e => e.BoltSlotEquipable).HasColumnName("Bolt Slot Equipable");

                entity.Property(e => e.BothHandEquipable).HasColumnName("Both Hand Equipable");

                entity.Property(e => e.BowDistRate).HasColumnName("bowDistRate");

                entity.Property(e => e.CorrectAgility).HasColumnName("Correct Agility");

                entity.Property(e => e.CorrectFaith).HasColumnName("Correct Faith");

                entity.Property(e => e.CorrectMagic).HasColumnName("Correct Magic");

                entity.Property(e => e.CorrectStrength).HasColumnName("Correct Strength");

                entity.Property(e => e.CorrectType).HasColumnName("Correct Type");

                entity.Property(e => e.CurseGuardResist).HasColumnName("Curse Guard Resist");

                entity.Property(e => e.DefendMaterial).HasColumnName("Defend Material");

                entity.Property(e => e.DefendSfxMaterial).HasColumnName("Defend Sfx Material");

                entity.Property(e => e.DefenseBaseParry).HasColumnName("Defense Base Parry");

                entity.Property(e => e.DisableBaseChangeReset).HasColumnName("Disable Base Change Reset");

                entity.Property(e => e.DisableMultiDropShare).HasColumnName("Disable Multi Drop Share");

                entity.Property(e => e.DisableRepair).HasColumnName("Disable Repair");

                entity.Property(e => e.DiseaseGuardResist).HasColumnName("Disease Guard Resist");

                entity.Property(e => e.EnableGuard).HasColumnName("Enable Guard");

                entity.Property(e => e.EnableMagic).HasColumnName("Enable Magic");

                entity.Property(e => e.EnableParry).HasColumnName("Enable Parry");

                entity.Property(e => e.EnablePyromancy).HasColumnName("Enable Pyromancy");

                entity.Property(e => e.EnableSorcery).HasColumnName("Enable Sorcery");

                entity.Property(e => e.EnableVowMagic).HasColumnName("Enable Vow Magic");

                entity.Property(e => e.EnglishName)
                    .HasColumnName("English name")
                    .HasMaxLength(255);

                entity.Property(e => e.EnglishType)
                    .HasColumnName("English Type")
                    .HasMaxLength(255);

                entity.Property(e => e.EquipModelCategory).HasColumnName("Equip Model Category");

                entity.Property(e => e.EquipModelGender).HasColumnName("Equip Model Gender");

                entity.Property(e => e.FireDamage).HasColumnName("Fire Damage");

                entity.Property(e => e.FireGuardPercent).HasColumnName("Fire Guard Percent");

                entity.Property(e => e.GuardAngle).HasColumnName("guardAngle");

                entity.Property(e => e.GuardBaseRepel).HasColumnName("Guard Base Repel");

                entity.Property(e => e.GuardCutCancelRate).HasColumnName("Guard Cut Cancel Rate");

                entity.Property(e => e.GuardLevel).HasColumnName("Guard Level");

                entity.Property(e => e.GuardMotionCategory).HasColumnName("Guard Motion Category");

                entity.Property(e => e.IconId).HasColumnName("iconId");

                entity.Property(e => e.InitialDurability).HasColumnName("Initial Durability");

                entity.Property(e => e.IsBlowAttackType).HasColumnName("Is Blow Attack Type");

                entity.Property(e => e.IsCustom).HasColumnName("Is Custom");

                entity.Property(e => e.IsDarkHand).HasColumnName("Is Dark Hand");

                entity.Property(e => e.IsDeposit).HasColumnName("Is Deposit");

                entity.Property(e => e.IsDragonSlayer).HasColumnName("Is Dragon Slayer");

                entity.Property(e => e.IsDurabilityDivergence).HasColumnName("Is Durability Divergence");

                entity.Property(e => e.IsEnhanced).HasColumnName("Is Enhanced");

                entity.Property(e => e.IsLuckCorrect).HasColumnName("Is Luck Correct");

                entity.Property(e => e.IsNormalAttackType).HasColumnName("Is Normal Attack Type");

                entity.Property(e => e.IsSlashAttackType).HasColumnName("Is Slash Attack Type");

                entity.Property(e => e.IsThrustAttackType).HasColumnName("Is Thrust Attack Type");

                entity.Property(e => e.IsVersusGhostWeapon).HasColumnName("Is Versus Ghost Weapon");

                entity.Property(e => e.LanternWeapon).HasColumnName("Lantern Weapon");

                entity.Property(e => e.LeftHandEquipable).HasColumnName("Left Hand Equipable");

                entity.Property(e => e.LightningDamage).HasColumnName("Lightning Damage");

                entity.Property(e => e.LightningGuardPercent).HasColumnName("Lightning Guard Percent");

                entity.Property(e => e.MagicDamage).HasColumnName("Magic Damage");

                entity.Property(e => e.MagicalGuardPercent).HasColumnName("Magical Guard Percent");

                entity.Property(e => e.MaterialSetId).HasColumnName("Material Set Id");

                entity.Property(e => e.MaxDurability).HasColumnName("Max Durability");

                entity.Property(e => e.ModelId).HasColumnName("Model Id");

                entity.Property(e => e.OldSortId).HasColumnName("Old Sort Id");

                entity.Property(e => e.OriginWeapon).HasColumnName("Origin Weapon");

                entity.Property(e => e.OriginWeapon1).HasColumnName("Origin Weapon +1");

                entity.Property(e => e.OriginWeapon10).HasColumnName("Origin Weapon +10");

                entity.Property(e => e.OriginWeapon11).HasColumnName("Origin Weapon +11");

                entity.Property(e => e.OriginWeapon12).HasColumnName("Origin Weapon +12");

                entity.Property(e => e.OriginWeapon13).HasColumnName("Origin Weapon +13");

                entity.Property(e => e.OriginWeapon14).HasColumnName("Origin Weapon +14");

                entity.Property(e => e.OriginWeapon15).HasColumnName("Origin Weapon +15");

                entity.Property(e => e.OriginWeapon2).HasColumnName("Origin Weapon +2");

                entity.Property(e => e.OriginWeapon3).HasColumnName("Origin Weapon +3");

                entity.Property(e => e.OriginWeapon4).HasColumnName("Origin Weapon +4");

                entity.Property(e => e.OriginWeapon5).HasColumnName("Origin Weapon +5");

                entity.Property(e => e.OriginWeapon6).HasColumnName("Origin Weapon +6");

                entity.Property(e => e.OriginWeapon7).HasColumnName("Origin Weapon +7");

                entity.Property(e => e.OriginWeapon8).HasColumnName("Origin Weapon +8");

                entity.Property(e => e.OriginWeapon9).HasColumnName("Origin Weapon +9");

                entity.Property(e => e.OverStrength).HasColumnName("Over Strength");

                entity.Property(e => e.ParryDamageLife).HasColumnName("parryDamageLife");

                entity.Property(e => e.PhysicalDamage).HasColumnName("Physical Damage");

                entity.Property(e => e.PhysicalGuardPercent).HasColumnName("Physical Guard Percent");

                entity.Property(e => e.PoisonGuardResist).HasColumnName("Poison Guard Resist");

                entity.Property(e => e.ReinforceTypeId).HasColumnName("reinforceTypeId");

                entity.Property(e => e.RepairPrice).HasColumnName("Repair Price");

                entity.Property(e => e.RequiredAgility).HasColumnName("Required Agility");

                entity.Property(e => e.RequiredFaith).HasColumnName("Required Faith");

                entity.Property(e => e.RequiredMagic).HasColumnName("Required Magic");

                entity.Property(e => e.RequiredStrength).HasColumnName("Required Strength");

                entity.Property(e => e.ResidentSpecialEffectId0).HasColumnName("Resident Special Effect Id 0");

                entity.Property(e => e.ResidentSpecialEffectId1).HasColumnName("ResidentSpecial Effect Id 1");

                entity.Property(e => e.ResidentSpecialEffectId2).HasColumnName("Resident Special Effect Id 2");

                entity.Property(e => e.RightHandEquipable).HasColumnName("Right Hand Equipable");

                entity.Property(e => e.SaDurability).HasColumnName("saDurability");

                entity.Property(e => e.SaWeaponDamage).HasColumnName("saWeaponDamage");

                entity.Property(e => e.SellValue).HasColumnName("Sell Value");

                entity.Property(e => e.SimpleModelForDlc).HasColumnName("Simple Model For Dlc");

                entity.Property(e => e.SlashGuardPercent).HasColumnName("Slash Guard Percent");

                entity.Property(e => e.SortId).HasColumnName("Sort Id");

                entity.Property(e => e.SpecialAttackCategory).HasColumnName("Special Attack Category");

                entity.Property(e => e.SpecialAttributes).HasColumnName("Special Attributes");

                entity.Property(e => e.SpecialEffectBehaviorId0).HasColumnName("Special Effect Behavior Id 0");

                entity.Property(e => e.SpecialEffectBehaviorId1).HasColumnName("Special Effect Behavior Id 1");

                entity.Property(e => e.SpecialEffectBehaviorId2).HasColumnName("Special Effect Behavior Id 2");

                entity.Property(e => e.StaminaDamage).HasColumnName("Stamina Damage");

                entity.Property(e => e.StaminaGuardDef).HasColumnName("staminaGuardDef");

                entity.Property(e => e.ThrowAtkRate).HasColumnName("throwAtkRate");

                entity.Property(e => e.ThrustGuardPercent).HasColumnName("Thrust Guard Percent");

                entity.Property(e => e.TrophySeqId).HasColumnName("trophySeqId");

                entity.Property(e => e.TrophySgradeId).HasColumnName("trophySGradeId");

                entity.Property(e => e.VagrantBonusEneDropItemLotId).HasColumnName("vagrantBonusEneDropItemLotId");

                entity.Property(e => e.VagrantItemEneDropItemLotId).HasColumnName("vagrantItemEneDropItemLotId");

                entity.Property(e => e.VagrantItemLotId).HasColumnName("vagrantItemLotId");

                entity.Property(e => e.WanderingEquipId).HasColumnName("Wandering Equip Id");

                entity.Property(e => e.WeaponCategory).HasColumnName("Weapon Category");

                entity.Property(e => e.WeaponMotionCategory).HasColumnName("Weapon Motion Category");

                entity.Property(e => e.WeaponMotionOneHandedId).HasColumnName("Weapon Motion One Handed Id");

                entity.Property(e => e.WeaponMotionTwoHandedId).HasColumnName("Weapon Motion Two Handed Id");

                entity.Property(e => e.WeaponWeightRate).HasColumnName("Weapon Weight Rate");
            });

            modelBuilder.Entity<WeaponUpgrades>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.EnglishName)
                    .HasColumnName("English Name")
                    .HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);
            });
        }
    }
}
