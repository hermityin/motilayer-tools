window.TOOLKIT_TOOLS = [
  {
    slug:"curve-flow",title:"Curve Flow",category:"Animation Editing",
    summary:"Apply a reusable easing shape across selected keyframe intervals while preserving their endpoints.",
    menu:"Tools > UI Animation Toolkit > Animation > Curve Flow",source:"Editor/Animation/Anim_SetCurves.cs",pdf:"docs/Animation/Curve_Flow.pdf",
    steps:["Select at least two keys on each property in the Animation window.","Draw the desired normalized time/value shape in the curve field.","Optionally copy a selected property’s key shape back into the editor.","Choose Apply to Selected Keyframes and review the rebuilt interval."],
    notes:["The first and last selected values are retained; keys between them are rebuilt.","The tool edits the Animation Clip. Use Undo before comparing alternatives."]
  },
  {
    slug:"frame-offset",title:"Frame Offset",category:"Animation Editing",
    summary:"Stagger selected keys or complete property curves in forward, backward, or seeded-random order.",
    menu:"Tools > UI Animation Toolkit > Animation > Frame Offset",source:"Editor/Animation/Anim_FrameOffset.cs",pdf:"docs/Animation/Frame_Offset.pdf",
    steps:["Select keys or property rows and set the Animation-window playhead to the intended anchor.","Choose Forward, Backward, or Random and enter the frame offset.","Choose Per Property or Group by Path.","Confirm the detected selection mode and apply the offset."],
    notes:["Each processed curve is first aligned to the playhead, then receives the extra stagger.","Property-row mode moves complete curves; keyframe mode moves selected keys only."]
  },
  {
    slug:"key-value-offset",title:"Key Value Offset",category:"Animation Editing",
    summary:"Shift selected numeric key values so their first or last selected key matches the current scene value.",
    menu:"Tools > UI Animation Toolkit > Animation > Key Value Offset",source:"Editor/Animation/Anim_KeyValueOffset.cs",pdf:"docs/Animation/Key_Value_Offset.pdf",
    steps:["Set the desired property value on the scene object outside animation preview.","Select the actual keys to change in the Animation window.","Choose First Key or Last Key as the anchor.","Verify the detected clip and root, then apply the value offset."],
    notes:["Key times do not move; all selected keys on a property receive the same delta.","Object-reference curves and unreadable properties are skipped."]
  },
  {
    slug:"posterize-time",title:"Posterize Time",category:"Animation Editing",
    summary:"Resample selected animation ranges at a target FPS to create stepped, low-frame-rate motion.",
    menu:"Tools > UI Animation Toolkit > Animation > Posterize Time",source:"Editor/Animation/Anim_PosterizeTime.cs",pdf:"docs/Animation/Posterize_Time.pdf",
    steps:["Select specific keys or property rows in the Animation window.","Enter the target sampling rate in FPS.","Check whether the tool detected keyframe or property-row mode.","Apply Posterize and use Undo if you need the original curve back."],
    notes:["This changes curve sampling, not the application frame rate.","The processed interval is rebuilt with Constant tangents."]
  },
  {
    slug:"animation-randomizer",title:"Animation Randomizer",category:"Animation Editing",
    summary:"Generate repeatable jitter or Perlin keyframes for shakes, drift, flicker, and controlled variation.",
    menu:"Tools > UI Animation Toolkit > Animation > Animation Randomizer",source:"Editor/Animation/Anim_Randomizer.cs",pdf:"docs/Animation/Animation_Randomizer.pdf",
    steps:["Select property rows, or select keys to define a later start time.","Set amplitude, frequency, duration, seed, and Jitter or Perlin mode.","Optionally enable Loop, Unified Random, or Stepped Keys.","Review the selection count and apply the generated sequence."],
    notes:["Existing keys outside the generated interval are retained.","The baseline normally comes from the first key of each existing curve."]
  },
  {
    slug:"expression-linker",title:"Expression Linker",category:"Animation Editing",
    summary:"Transform a source curve with a small arithmetic expression and bake the result to target properties.",
    menu:"Tools > UI Animation Toolkit > Animation > Expression Linker",source:"Editor/Animation/Anim_ExpressionLinker.cs",pdf:"docs/Animation/Expression_Linker.pdf",
    steps:["Select one source property row in the Animation window.","Enter an expression such as value * -1 or value * 0.5 + 100.","Add one or more target GameObjects and destination properties.","Bake the transformed values and tangents into the Animation Clip."],
    notes:["This is an Editor baking tool, not a live runtime expression engine.","Existing destination curves may be replaced. Inspect targets before baking."]
  },
  {
    slug:"bezier-curve-motion",title:"Bezier Curve Motion",category:"Animation Editing",
    summary:"Edit a multi-segment 2D Bezier path in the Scene view and bake UI position and optional Z rotation.",
    menu:"Tools > UI Animation Toolkit > Animation > Bezier Curve Motion",source:"Editor/Animation/Anim_BezierCurveMotion.cs",pdf:"docs/Animation/Bezier_Curve_Motion.pdf",
    steps:["Open the destination clip and set its playhead to the start time.","Assign a UI target with a RectTransform.","Shape the path with anchors and tangent handles in the Scene view.","Set duration, sample rate, easing, and optional path orientation.","Apply to Clip, then optionally reduce the baked keyframes."],
    notes:["Path coordinates are authored in world space and converted to the target parent’s local space.","This is a 2D path tool with optional Z rotation, not a general 3D path system."]
  },
  {
    slug:"animation-path-fixer",title:"Animation Path Fixer",category:"Animation Editing",
    summary:"Analyze and repair broken Animation Clip binding paths after hierarchy nodes are moved or renamed.",
    menu:"Tools > UI Animation Toolkit > Animation > Animation Path Fixer",source:"Editor/Animation/Anim_PathFixer.cs",pdf:"docs/Animation/Animation_Path_Fixer.pdf",
    steps:["Open the affected clip with the relevant scene hierarchy available.","Assign the moved node’s new parent, or the renamed node itself.","Review the inferred old/new prefixes and matched or unmatched bindings.","Confirm the proposed rule, then apply the repair."],
    notes:["The prefix fields are read-only previews; unmatched bindings need manual investigation.","Back up important clips and validate serialized-path repairs in your Unity version."]
  },
  {
    slug:"apply-last-frame",title:"Apply Last Frame",category:"Animation Editing",
    summary:"Apply the last stored numeric value of each supported clip curve to the corresponding scene component.",
    menu:"Tools > UI Animation Toolkit > Animation > Apply Last Frame",source:"Editor/Animation/Anim_ApplyLastFrame.cs",pdf:"docs/Animation/Apply_Last_Frame.pdf",
    steps:["Select the animated root and open its clip in the Animation window.","Verify the read-only Current Clip field.","Choose Apply Last Frame and inspect the resulting scene values.","Use Undo if needed, then save scene or Prefab changes deliberately."],
    notes:["The command writes scene values and does not rewrite the clip.","Object-reference curves are skipped, and different curves may end at different times."]
  },
  {
    slug:"keep-last-frame-only",title:"Keep Last Frame Only",category:"Animation Editing",
    summary:"Turn the current clip into a static state by keeping each curve’s final key and moving it to time zero.",
    menu:"Tools > UI Animation Toolkit > Animation > Keep Last Frame Only",source:"Editor/Animation/Anim_KeepLastFrameOnly.cs",pdf:"docs/Animation/Keep_Last_Frame_Only.pdf",
    steps:["Duplicate the source clip if its original animation must be preserved.","Open the intended clip, or select an AnimationClip asset in Project.","Verify the detected Current Clip.","Choose Keep Last Frame Only and inspect the resulting keys at time zero."],
    notes:["This is a whole-clip operation covering numeric and object-reference curves.","Animation events and other clip settings are not cleared."]
  },
  {
    slug:"quick-ui-builder",title:"Quick UI Builder",category:"UI Workflow",
    summary:"Create common UGUI nodes, batch-rename objects, set pivots, and add built-in or custom components.",
    menu:"Tools > UI Animation Toolkit > UI > Quick UI Builder",source:"Editor/UI/QuickUIBuilder/QuickUIBuilder.cs + helpers",pdf:"docs/UI_Authoring/Quick_UI_Builder.pdf",
    steps:["Select the intended objects in the Hierarchy and open the dockable toolbar.","Use Rename, Create, Pivot, or the built-in component buttons.","Hold Alt to create a child; Shift-click Empty to wrap the selection.","Add custom component shortcuts and use the right-click JSON import/export menu when needed."],
    notes:["Custom buttons are stored locally in EditorPrefs; export JSON to transfer them.","Importing JSON replaces the current custom-button list."]
  },
  {
    slug:"mat-keyframer",title:"MatKeyframer",category:"Shader Property Animation",
    summary:"Expose selected UGUI shader properties as component fields that can be keyed in the Animation window.",
    menu:"Add Component > UI Animation Toolkit > Mat Keyframer",source:"Runtime/Materials/MatKeyframer.cs + Editor Inspector",pdf:"docs/Material_Animation/MatKeyframer.pdf",
    steps:["Select a UGUI Graphic and assign the material whose properties you want to animate.","Add Mat Keyframer and enable supported properties from the Inactive list.","Edit the allocated values under Active.","Add or record the matching MatKeyframer fields in the Animation window and create keys."],
    notes:["This targets UGUI Graphic components, not MeshRenderer or SkinnedMeshRenderer.","Supports 4 Float, 4 Color, 2 texture transform, and 2 Vector4 slots.","Each component manages a material instance; test batching, masks, and material switching."]
  },
  {
    slug:"asset-favorites",title:"Asset Favorites",category:"Assets & Particles",
    summary:"Bookmark, categorize, search, and reorganize frequently used project assets without moving source files.",
    menu:"Tools > UI Animation Toolkit > Asset Browsers > Asset Favorites",source:"Editor/AssetBrowsers/AssetFavorites.cs",pdf:"docs/Asset_Browsers/Asset_Favorites.pdf",
    steps:["Add assets from the Project context menu, or drag assets and folders into the window.","Browse automatic categories or create nested custom folders.","Use search, grid/list sizing, and multi-selection to find and organize bookmarks.","Single-click to locate, double-click to open, or drag an asset into another workflow."],
    notes:["Removing a favorite does not delete the original project asset.","Favorites are stored in local EditorPrefs and do not automatically travel with version control."]
  },
  {
    slug:"prefab-browser",title:"Prefab Browser",category:"Assets & Particles",
    summary:"Browse Prefabs through a folder tree with path-aware search, responsive thumbnails, and drag support.",
    menu:"Tools > UI Animation Toolkit > Asset Browsers > Prefab Browser",source:"Editor/AssetBrowsers/PrefabBrowser.cs + preview helper",pdf:"docs/Asset_Browsers/Prefab_Browser.pdf",
    steps:["Choose a folder in the left tree to define the search scope.","Enter filename tokens or a path/filename query.","Adjust the zoom slider to move between grid and compact list views.","Click to locate, double-click to open, or drag a Prefab into your workflow."],
    notes:["Text before the last slash must be a contiguous path substring; filename tokens use AND matching.","Thumbnails are cached under Assets/Editor/PrefabPreviews."]
  },
  {
    slug:"particle-browser",title:"Particle Browser",category:"Assets & Particles",
    summary:"Maintain a searchable, tagged, project-local particle Prefab library with Scene previews and import/export.",
    menu:"Tools > UI Animation Toolkit > Particles > Particle Browser",source:"Editor/Particles/ParticleBrowser.cs + data/import/filter/preview helpers",pdf:"docs/Particle_Library/Particle_Browser.pdf",
    steps:["Open the browser and let it create the local data asset and default categories.","Import a Prefab or drag a supported Prefab or scene object into the window.","Assign tags, then search and filter the library by name and category.","Hover for a Scene preview, drag an entry for scene use, or export a selected entry."],
    notes:["The toolkit contains library tools, not bundled particle effects.","Remove from Favorites deletes the managed Import folder after confirmation and cannot be undone.","Import/export does not guarantee complete dependency packaging for every third-party effect."]
  },
  {
    slug:"psd-importer",title:"PSD Importer",category:"PSD Workflow",
    summary:"Export supported visible PSD layers and rebuild their hierarchy, layout, images, and text as a UGUI Prefab.",
    menu:"Tools > UI Animation Toolkit > PSD Importer > Import PSD",source:"Editor/Importers/PSD/Psd_Importer.cs + psd_exporter.py",pdf:"docs/PSD_Import/PSD_Importer.pdf",
    steps:["Install Python 3.10+ and run python -m pip install psd-tools Pillow.","Prepare visible PSD layers and bake unsupported styles or clipping effects where needed.","Choose Import PSD and select the PSD or supported PSB file.","Inspect the generated images, layout data, and same-named UGUI Prefab before scene use."],
    notes:["Text layers marked #txt create Legacy Text, not TextMeshPro.","Adjustment and clipping layers are skipped; advanced Photoshop effects and fonts may require manual correction.","Reimporting can overwrite generated images and the generated Prefab."]
  }
];
